export function inicial(req, res, next) {
  res.json({
    success: true,
    rota: "/",
  });
}

export function final(req, res, next) {
  res.json({
    success: true,
    rota: "/final",
  });
}

export function criar(req, res, next) {
  res.json({
    success: true,
    rota: "/criar",
  });
}
