const supa = require('@supabase/supabase-js');

const supaUrl = 'https://kyucgqiddevclgzuvvii.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY';

module.exports = supa.createClient(supaUrl, supabaseKey);

async function handleRPC(rpcName, params, res) {
    const { data, error } = await supabase.rpc(rpcName, params);
    if (error) res.status(500).send(error.message);
    else res.send(data);
}
module.exports = { handleRPC };