export const createRouteParams = <T extends string>(...routes: T[]) =>
  Object.fromEntries(routes.map(route => [route, undefined])) as Record<
    T,
    undefined
  >;

export type RootStackParamList = ReturnType<typeof createRouteParams>;
