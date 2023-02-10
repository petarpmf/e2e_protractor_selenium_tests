interface ISpecManager {
   serviceOwner: Array<string>;
}

export let specsManager: ISpecManager = {
   serviceOwner: [
      './specs/first.spec.js',
      './specs/second.spec.js',
   ]
};