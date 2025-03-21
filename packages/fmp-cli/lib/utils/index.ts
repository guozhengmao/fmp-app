export const readStream = (stream) => {
    return new Promise((resolve, reject) => {
        let data = '';
        stream.on('data', (chunk) => { data += chunk.toString(); });
        stream.on('end', () => resolve(data))
        stream.on('error', (err) => reject(err))

    })
}