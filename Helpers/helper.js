import bcrypt from 'bcrypt'

export const hashedPassword = async(password) => {
    try {
        const rounds = 10;
        const hashPassword = await bcrypt.hash(password,rounds);
        return hashPassword
    } catch (error) {
        console.log(error);
    }
}

export const compared = async (password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword);
}