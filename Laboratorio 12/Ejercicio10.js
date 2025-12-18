const func1=texto=>texto.toUpperCase();
const func2=texto=>`${texto}!`;

const componerTransformaciones = (f1, f2) => texto => f2(f1(texto));

const transformar=componerTransformaciones(func1, func2);