function handler(res, req) {
  res.status(200).json({ messag: "hello world" });
}

export default handler;
