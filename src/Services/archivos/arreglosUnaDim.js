let arreglosUnaDim = `function swap(i::Int64, j::Int64, arr::Vector{Int64})::Nothing
    temp = arr[i]::Int64;
    arr[i] = arr[j];
    arr[j] = temp;
end;

function bubbleSort(arr::Vector{Int64})::Nothing
    for i in 0:(length(arr) - 1)
        for j in 1:(length(arr) - 1)
            if(arr[j] > arr[j + 1])
                swap(j, j+1, arr);
            end;
        end;
    end;
end;

function insertionSort(arr::Vector{Int64})::Nothing

    for i in 2:length(arr)
        j = i;
        temp = arr[i];
        while(j > 1 && arr[j - 1] > temp)
            arr[j] = arr[j-1];
            j = j - 1;
        end;
        arr[j] = temp;
    end;

end;

arreglo = [32,7*3,7,89,56,909,109,2,9,9874^0,44,3,820*10,11,8*0+8,10];
bubbleSort(arreglo);
println("BubbleSort: ")
for i in arreglo
    print(i, ", ")
end
println("")

arreglo = [32,7*3,7,89,56,909,109,2,9,9874^1,44,3,820*10,11,8*0+8,10];
arreglo[1] = arreglo[2]^0;
println("InsertionSort: ")
insertionSort(arreglo);
for i in arreglo
    print(i, ", ")
end
println("")
`

export default arreglosUnaDim