export const onRequest = async (context) => {
  return new Response("Hello World!");
};

export const config = {
  compatibility_flags: ["nodejs_compat"],
};
