
public class MyThread2 extends Thread{
	 synchronized public void run(){
         for(int i=2;i<=10;i=i+2){             
             System.out.println(i);
         }
		 
     }
}
