export async function POST({ request }) {
	try {
		const data = await request.json();
		
		console.log('Exit tracking:', {
			session: data.session,
			timeSpent: data.timeSpent + ' seconds',
			timestamp: data.timestamp
		});
		
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
