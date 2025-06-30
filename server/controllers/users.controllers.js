import {
    getUserFromToken,
    createCompany,
    createSite,
    createUser,
    getUserById,
    getRoleByName
} from '../models/users.models.js'

export async function onboardUser(req, res) {
    try {
        const { name, companyName, siteName } = req.body

        const user = await getUserFromToken(req)
        if (!user) return res.status(401).jason({ error: 'Unauthenticated' })

        const existingUser = await getUserById(user.id)
        if (existingUser) return res.status(200).json({ message: 'Already onboarded' })

        const company = await createCompany(companyName)
        const site = await createSite(siteName, company.id)
        const role = await getRoleByName('Adminstrator')

        await createUser({
            id: user.id,
            name,
            company_id: company.id,
            site_id: site.id,
            role_id: role.id,
        })

        return res.status(200).json({ message: 'Onboarding successful' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err.message })
    }

}


