import { useEffect } from "react";

export const useMountEffect = (fun: React.EffectCallback, deps?: React.DependencyList | undefined) => useEffect(fun, []);