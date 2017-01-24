function output() { return Array.from(arguments).map(i => console.log(i)); }

const Magma = (elem) => ({
    fold: () => elem,
    op: (magma) => Magma((magma.fold() + elem) % 12),
    inspect: () => `Magma(${elem})`
});

const 
    a = Magma(7),
    b = Magma(7),
    c = Magma(4);

output(
    a.op(b).op(c)
);