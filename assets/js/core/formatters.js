export const normalize=v=>String(v??"").trim().replace(/\s+/g," ").toLowerCase();export const capitalize=v=>String(v).replace(/\b\w/g,c=>c.toUpperCase());
