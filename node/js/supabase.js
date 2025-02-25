const supa = require("@supabase/supabase-js");

const supaUrl = "https://kyucgqiddevclgzuvvii.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dWNncWlkZGV2Y2xnenV2dmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MjM1ODksImV4cCI6MjA1NTQ5OTU4OX0.EBPKNApy_VLIoIbghkwLJjNyslfk2NM_ghG-ACJ2HJI";

const supabase = supa.createClient(supaUrl, supabaseKey);

async function handleRPC(rpcName, params, res) {
  const { data, error } = await supabase.rpc(rpcName, params);
  if (error) {
    res.status(500).json({ message: error.message });
  } else if (!data || data.length === 0) {
    res.status(404).json({ message: "No data found at this endpoint" });
  } else {
    res.send(data);
  }
}

module.exports = { handleRPC };
