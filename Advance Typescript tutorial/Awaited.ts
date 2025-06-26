main();

async function main() {
  const single: Promise<string> = new Promise((res) => res("ls34232"));

  const triple: Promise<Promise<Promise<string>>> = new Promise<
    Promise<Promise<string>>
  >((res) =>
    res(
      new Promise<Promise<string>>((res) =>
        res(
          new Promise<string>((res) => {
            res("Vin deisel");
          })
        )
      )
    )
  );
  const singleResult = await single;
  console.log(singleResult);

  const tripleResult = await triple;
  console.log(tripleResult);
}

// if we have multiple nested promises so we will wrapped it beacuse at the end it will return the last given data type

type wrappedInDeep = Promise<Promise<Promise<Promise<string>>>>;

type AwaitedResult = Awaited<wrappedInDeep>;

// so we can implement it using the following examples
async function example<T>(input: T) {
  const output: Awaited<T> = await input;
  console.log(output);
}
