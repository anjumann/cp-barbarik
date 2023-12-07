import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getClient = async () => {
    try {
        const data = await prisma.client.findMany()
        return data
    } catch (error) {
        return error
    }
}

const createClient = async (formData: {
    companyName: string,
    category: string,
    companySize: string,
    companyEmail: string,
    description: string
}) => {
    const {
        companyName,
        category,
        companySize,
        companyEmail,
        description
    } = formData
    try {
        const data = await prisma.client.create({
            data: {
                companyName,
                category,
                companySize,
                companyEmail,
                description,
            }
        })

        return data
    } catch (error) {
        return error
    }

}

export {createClient, getClient}