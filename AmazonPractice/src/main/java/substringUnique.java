import java.util.*;

public class substringUnique {
	     public static void main(String []args){

	        substring("abcde");
	     }
	     
	     static void substring(String s){
	         List<String> strlist = new ArrayList<String>();
	         for(int i=0; i<=s.length(); i++){
	             for(int j=i+1; j<= s.length(); j++){
	                    String str = s.substring(i,j);
	                    if((str.length() >=2) && (str.length() <=3))
	                        strlist.add(str);
	             }
	         }
	         
	         Map<String, Integer> strmap = new HashMap<String, Integer>();
	         for(String strl: strlist){
	        	 if (strmap.containsKey(strl)) {
	        		Integer count =  strmap.get(strl);
	        		 strmap.put(strl, ++count);
	        	 }
	        	 else {
	        		 strmap.put(strl, 1);
	        	 }
	         }
	         
	         for(Map.Entry<String, Integer> e: strmap.entrySet()){
	             System.out.println(e.getKey() + " " + e.getValue());
	         }
	     }
	}
