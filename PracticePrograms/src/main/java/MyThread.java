public class MyThread extends Thread{

     synchronized public void run(){
         for(int i=1;i<=10;i=i+2){
        	 System.out.println(i);
         }         
     }
     public static void main(String []args){

        Thread t1 = new MyThread();
        Thread t2 = new MyThread2();
        t1.start();
        t2.start();
     }
}
