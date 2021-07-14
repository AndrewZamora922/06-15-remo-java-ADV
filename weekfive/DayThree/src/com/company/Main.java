package com.company;

public class Main {

    public static void main(String[] args) throws InterruptedException {
//        (new Thread(new HelloRunnable())).start();
        String importantInfo[] = {
                "Mares eat oats",
                "Does eat oats",
                "Little lambs eat ivy",
                "A kid will eat ivy too"
        };
        for(int i = 0; i < importantInfo.length; i++){
            // Pause for 4 seconds
            try {
                Thread.sleep(4000);
            }catch(InterruptedException e){
                return;
            }
            // print out the info
            System.out.println(importantInfo[i]);
        }
        String inputs[] = {
                "Mares eat oats",
                "Does eat oats",
                "Little lambs eat ivy",
                "A kid will eat ivy too"
        };
        for(int i = 0; i < inputs.length; i++){
            heavyCrunch(inputs[i]);
            if(Thread.interrupted()){
                // been interrupted: no more crushing.
                return;
            }
        }
    }
    private static void heavyCrunch(String input) {
    }
}
