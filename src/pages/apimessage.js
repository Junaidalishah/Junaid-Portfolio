import supabase from "./supabaseClient";
export async function createMessage(newmessage) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([newmessage]);

  if (error) {
    console.log(error);
    throw new Error("Message could not be sending");
  }
  return data;
}
