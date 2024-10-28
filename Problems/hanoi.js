function tower_of_hanoi(n, fromRod,toRod, usingRod) {
    if (n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    tower_of_hanoi(n-1,fromRod, toRod, usingRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    tower_of_hanoi(n-1,usingRod,toRod, fromRod);
}


tower_of_hanoi(3, 'A','C','B')