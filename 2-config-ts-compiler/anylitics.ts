console.log("Sending....");
let appId = "1234";
let logged;

const add = (n1: number, n2: number) => {
  if (n1 + n2 > 0) return n1 + n2;
  return;
};

const sendAnalitycs = (data: string) => {
  console.log(data);
  logged = true;
  logged = "true";
};

sendAnalitycs("The data");
