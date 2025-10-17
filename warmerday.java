import java.util.Scanner;

public class warmerday {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter num of days:");
        int numDays = sc.nextInt();
        int[] temperature = new int[numDays];
        int[] output = new int[numDays];
         for(int i=0;i<numDays;i++){
             System.out.print("Enter element "+(i+1)+":");
            temperature[i] = sc.nextInt();
         }
         for(int i=0;i<numDays;i++){
            int j=i+1;
            int difference=0;
            while(j<numDays){
                if(temperature[j]>temperature[i]){
                    difference=j-i;
                    break;
                }
                j++;
            }
            output[i]=difference;
         }
         for (int i : output) {
            System.out.print(i+",");
         }
    }
}
