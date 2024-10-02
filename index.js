//Accessing DB with Javascript example
//Use env.DB, where DB is name of the binding to cloudfare workers

export default {
    async fetch(request, env) {
        const { pathname } = new URL(request.url);
  
        if (pathname === "/api/beverages") {
            const { results } = await env.DB.prepare(
                "SELECT * FROM Customers WHERE CompanyName = ?"
            )
            .bind("Bs Beverages")
            .all();
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" },
            });
        }
  
        return new Response(
            "Call /api/beverages to see everyone who works at Bs Beverages"
        );
    },
};