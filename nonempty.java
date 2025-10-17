import java.util.ArrayList;
import java.util.Scanner;

public class nonempty {
    public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
        System.out.print("Enter string nos:");
        int numStrings = sc.nextInt();
        sc.nextLine();
        String[] strArray= new String[numStrings]; 
        String[] outpuStrings= new String[numStrings]; 
        for(int i=0;i<numStrings;i++){
            strArray[i]=sc.nextLine();
        }



        //substr check
        for(int i=0;i<numStrings;i++){
            String str="";
            outpuStrings[i]="";
            for(int j=0;j<strArray[i].length()-1;j++){
                String min = "";
                for(int k=j+1;k<=strArray[i].length();k++){
                    str=strArray[i].substring(j,k);
                    int contains = 0;
                    for(int l=0;l<numStrings;l++){
                        if(l==i){
                            continue;
                        }
                        if(strArray[l].contains(str)){
                            contains++;
                        }
                    }
                    if(contains==0){
                        if(min==""){
                            min=str;
                        }
                        
                        if(str.compareTo(min)==-1){
                            min=str;
                                }
                        outpuStrings[i]=min;
                    }
                    
                }
                
                
            }
            

        }
 System.out.println("===============================");
        for (String string : outpuStrings) {
            System.out.print("\""+string+"\""+(","));
        }

    }
}