// autobind decorator
export function AutoBind(_: any, __: string, decriptor: PropertyDescriptor) {
  const originalMethod = decriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
