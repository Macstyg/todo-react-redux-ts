interface IAction<T extends string> {
  type: T
}
interface IActionWithPayload<T extends string, P> extends IAction<T> {
  payload: P,
}

type IActionFn<T extends string> = () => IAction<T>;
type IActionWithPayloadFn<T extends string, P> = (payload: P) => IActionWithPayload<T, P>;

export function action<T extends string>(type: T): IActionFn<T>
export function action<T extends string, P>(type: T): IActionWithPayloadFn<T, P>
export function action(type: string) {
  return (payload?: any) => payload ? { type, payload } : { type };
}

interface IActionCreatorMapObject {
  [actionCreator: string]: (...args: any[]) => any
}

export type ActionsUnion<A extends IActionCreatorMapObject> = ReturnType<A[keyof A]>