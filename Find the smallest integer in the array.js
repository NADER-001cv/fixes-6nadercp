

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var small = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] <= small) {
        small = args[i];
      }
    }
    return small;
  }
}


