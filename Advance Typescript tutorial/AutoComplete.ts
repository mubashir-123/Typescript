// By defining the literals only we cannot give any other value than literals

//  type Padding = "small" | "meduim" | "large"
//  type Padding = "small" | "meduim" | "large" | string; // by defining the string which is the super type of the literals can allow to allow the values other than the literals

type Padding = "small" | "meduim" | "large" | (string & {}); // Now by using the intersection with empty objects allow to preserve the literals and can contain values other than literals

// Note: the return type string og the function can accept any values in forms of string as it returns the string
function getPadding(padding: Padding): string {
  if (padding === "small") return "12px";
  if (padding === "meduim") return "16px";
  if (padding === "large") return "20px";
  return padding;
}

let padding: Padding;

padding = "small";
padding = "8px";
padding = "large";
