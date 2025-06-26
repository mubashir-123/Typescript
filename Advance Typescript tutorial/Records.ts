// Records are use to store the data in key pair values

// For demo only
type pageInfo = {
  id: string;
  title: string;
};

type PageVerbose = {
  home: pageInfo;
  about: pageInfo;
  services: pageInfo;
  contactUs: pageInfo;
};

// By using the record we can use union for the keys in the object and we dont need to define the type pageInfo, we can direclty anotate the object as shown below
type pages = Record<
  "home" | "about" | "services" | "contactUs",
  { id: string; title: string }
>;
