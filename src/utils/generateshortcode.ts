
export function generateShortCode() {
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';

    for(let i=0;i<6;i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}