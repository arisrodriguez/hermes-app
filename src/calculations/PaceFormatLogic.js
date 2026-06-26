/**
 * Calcula el ritmo (pace) promedio por kilómetro.
 *
 * @param {Object} params - Los datos necesarios para el cálculo.
 * @param {number|string} params.distance - La distancia recorrida (en km).
 * @param {number|string} params.hours - Las horas del tiempo total.
 * @param {number|string} params.minutes - Los minutos del tiempo total.
 * @param {number|string} params.seconds - Los segundos del tiempo total.
 * @returns {Object} - Un objeto con el pace formateado y el pace en segundos.
 */
export const calculatePace = ({ distance, hours, minutes, seconds }) => {
    // Convertir el tiempo total a segundos.
    const totalSeconds = (Number(hours) * 3600) + (Number(minutes) * 60) + Number(seconds);
    // Calcular el ritmo en segundos por kilómetro dividiendo el tiempo total entre la distancia.
    const paceSeconds = totalSeconds / Number(distance);

    // Obtener los minutos enteros a partir de paceSeconds.
    const paceMin = Math.floor(paceSeconds / 60);
    // Obtener los segundos restantes redondeados.
    const paceSec = Math.round(paceSeconds % 60);
    // Formatear el pace en formato "mm:ss min/km" para mostrárselo al usuario.
    const paceFormatted = `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} min/km`;

    // Retorna el pace formateado y el pace en segundos (útil para cálculos posteriores).
    return { paceFormatted, paceSeconds };
};

/**
 * Calcula los parámetros básicos para las zonas de frecuencia cardíaca (HR).
 *
 * @param {Object} params - Los datos necesarios para el cálculo.
 * @param {number|string} params.age - La edad del usuario.
 * @param {number|string} params.restingFreq - La frecuencia cardíaca en reposo del usuario.
 * @returns {Object} - Un objeto con la frecuencia cardíaca máxima, la FC en reposo y la reserva de FC.
 */
export const calculateHeartRateZones = ({ age, restingFreq }) => {
    // Calcular la frecuencia cardíaca máxima usando la fórmula 220 - edad.
    const maxHR = 220 - Number(age);
    // Asegurarse de que restingFreq sea numérico.
    const resting = Number(restingFreq);
    // Calcular la reserva de frecuencia cardíaca: diferencia entre la FC máxima y la FC en reposo.
    const HRreserve = maxHR - resting;

    // Devuelve los valores calculados que se utilizarán para determinar las zonas.
    return { maxHR, restingFreq: resting, HRreserve };
};

/**
 * Calcula las zonas de entrenamiento combinando el pace y la frecuencia cardíaca.
 *
 * @param {Object} formData - Los datos del formulario.
 * @returns {Object} - Un objeto que contiene el pace promedio formateado y un array con las zonas de entrenamiento.
 */
export const calculateTrainingZones = (formData) => {
    // Se calcula primero el pace promedio.
    const { paceFormatted, paceSeconds } = calculatePace(formData);
    // Se calculan los parámetros para la frecuencia cardíaca.
    const { restingFreq, HRreserve } = calculateHeartRateZones(formData);

    // Se definen los porcentajes de cada zona (por ejemplo 50-60% HRR, 60-70% HRR, etc.).
    // Este array se utilizará para iterar y calcular cada zona.
    const zones = [50, 60, 70, 80, 90].map((percentage, index) => {
        // Calcular la FC mínima para la zona usando el porcentaje actual del HRreserve.
        const minHR = Math.round(restingFreq + (HRreserve * (percentage / 100)));
        // Calcular la FC máxima utilizando el porcentaje siguiente (10% más).
        const maxHR = Math.round(restingFreq + (HRreserve * ((percentage + 10) / 100)));

        // Ajuste del pace: se incrementa el tiempo (en segundos) según la zona.
        // Por ejemplo, una zona más suave tendrá un pace un poco más lento que el pace base.
        // Aquí se usan factores multiplicadores específicos para cada zona.
        const paceSecondsMax = paceSeconds * (1 + ((4 - index) * 0.03));
        const paceSecondsMin = paceSeconds * (1 + ((5 - index) * 0.03));

        // Convertir paceSecondsMin a minutos y segundos.
        const paceMin = Math.floor(paceSecondsMin / 60);
        const paceSecMin = Math.round(paceSecondsMin % 60);
        // Formatear el pace mínimo.
        const paceFormattedMin = `${paceMin}:${paceSecMin < 10 ? '0' : ''}${paceSecMin}`;

        // Convertir paceSecondsMax a minutos y segundos.
        const paceMax = Math.floor(paceSecondsMax / 60);
        const paceSecMax = Math.round(paceSecondsMax % 60);
        // Formatear el pace máximo.
        const paceFormattedMax = `${paceMax}:${paceSecMax < 10 ? '0' : ''}${paceSecMax}`; //si quiere mostrar min/km

        // Retorna un objeto con el nombre de la zona, el rango de FC y el rango de pace.
        return {
            zone: `Zone ${index + 1}`,
            hr: `${minHR}-${maxHR}`, //si se quiere mostrar bpm
            pace: `${paceFormattedMin}-${paceFormattedMax}`,
        };
    });

    // Se retorna el pace promedio formateado junto con el array de zonas.
    return { paceFormatted, zones };
};


