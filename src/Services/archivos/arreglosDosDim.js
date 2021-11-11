let arreglosDosDim = `random = [1, 5, 8, -1, 21, 42, -55, 123, -5, 5, 11];

a = [
    [
        random[1] * 3,
        51,
        random[4] / 2,
        (random[3] * 10) % 7
    ],
    [
        1,
        2,
        3,
        4
    ]
];

b = [
    [
        1,
        2,
        3,
        4
    ],
    [
        random[1] * 3,
        51,
        random[4] / 2,
        (random[3] * 10) % 7
    ]
];

auxiliar = [
    [
        0.0,
        0.0,
        0.0,
        0.0
    ],
    [
        0.0,
        0.0,
        0.0,
        0.0
    ]
];


# Si no tienen implementado este for, pueden cambiarlo por algún otro ciclo que funcione parecido.
function printMatriz(matrix::Vector{Vector{Float64}})::Nothing
    println("[");
    for i in matrix
        print("[");
        for j in i
            print(j, " ");
        end;
        println("]");
    end;
    println("]");
end;

function sumarMatrices(matrix1::Vector{Vector{Float64}}, matrix2::Vector{Vector{Float64}})::Vector{Vector{Float64}}
    if length(matrix1) != length(matrix2)
        return "NO SE PUEDEN SUMAR. NO SON DE LA MISMA LONGITUD";
    end;


    for i in 1:length(matrix1)
        for j in 1:length(matrix1[1])
            auxiliar[i][j] = matrix1[i][j] + matrix2[i][j];
        end;
    end;
    return auxiliar;
end;

function compararMatrices(matrix1::Vector{Vector{Float64}}, matrix2::Vector{Vector{Float64}})::Bool
    if length(matrix1) != length(matrix2)
        return false;
    end;


    for i in 1:length(matrix1)
        for j in 1:length(matrix1[1])
            if matrix1[i][j] != matrix2[i][j]
                return false;
            end;
        end;
    end;
    return true;
end;

println("MATRIZ a");
printMatriz(a);
println();
println("MATRIZ b");
printMatriz(b);

println();
println("LAS DOS MATRICES SUMADAS");
printMatriz(sumarMatrices(a, b));

println();
println("COMPARAR MATRICES. SON IGUALES?");
println(compararMatrices(a, b));


b = a;
println();
println("COMPARAR MATRICES. SON IGUALES?");
println(compararMatrices(a, b));

`

export default arreglosDosDim