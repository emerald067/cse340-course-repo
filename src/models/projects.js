import db from './db.js';

const getAllProjects = async () => {
    const query = `
        SELECT p.project_id, p.title, p.project_date, p.description, p.location, o.name AS organization_name
        FROM public.project AS p
        INNER JOIN public.organization AS o ON p.organization_id = o.organization_id
        ORDER BY p.project_date ASC;
    `;

    const result = await db.query(query);

    return result.rows;
};

export { getAllProjects };
