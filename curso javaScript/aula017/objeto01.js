const amigo = {
  nome: "José",
  sexo: "masculino",
  peso: 85.4,
  engordar: (p) => {
    console.log("Engondou");
    amigo.peso += p;
  },
  idade: 85,
};

console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);

amigo.engordar(10);

console.log(amigo.peso);
