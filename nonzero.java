import java.util.Scanner;

public class nonzero{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter no of elements:");
        int n = sc.nextInt();
        int zerocount=0;
        
       
        int[] Array = new int[n];
        int j=0;
        for(int i=0;i<n;i++){
             System.out.print("Enter element "+(i+1)+":");
             Array[i] = sc.nextInt();
             if(Array[i]==0){
                zerocount++;
             }
             else{
                Array[j++]=Array[i];
             }
        }
        for(int i=0;i<zerocount;i++){
            Array[j++]=0;
        }
        System.out.println("========");
        for(int i=0;i<n;i++){
            System.out.print(Array[i]+",");
        }
        

    }
}