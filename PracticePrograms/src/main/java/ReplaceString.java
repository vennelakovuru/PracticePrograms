
public class ReplaceString {
	/*
	 * public static void main(String args[]) { ReplaceString rs = new
	 * ReplaceString(); rs.replace("hello", 'h', 'k', p);
	 * 
	 * }
	 */
	
	 void replace(String s, char chold, char chnew, Person p) {
//		String snew = s.replace(chold, chnew);
//		System.out.println(snew);
		
		p.help();
		char[] snew = s.toCharArray();
		StringBuffer res = new StringBuffer();
		for(char ch: snew) {
			if (Character.compare(ch, chold) == 0) {
				ch = chnew;
			}
			res.append(ch);
		}
		
//		return res.toString();
		
	}
}
