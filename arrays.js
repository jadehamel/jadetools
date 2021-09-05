the_array = [1,2,3,"a","b","c"]

a_temp = []
i = 0
while (i < the_array.length) {
  i++
  a_temp.push(the_array[the_array.length - i])
}

the_array = a_temp
