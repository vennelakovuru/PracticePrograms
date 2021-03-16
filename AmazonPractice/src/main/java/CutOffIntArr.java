import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CutOffIntArr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		List<Integer> li = new ArrayList<Integer>( Arrays.asList(2,2,3,4,5));
		
		int [] li = {2,2,2,2,2};
		int output = countLevelUpPlayers(2, 5, li);  
		System.out.println(output);
	}
	
	public static int countLevelUpPlayers(int cutOffRank, int num, int[] scores) {

		 List<Integer> li = new ArrayList<Integer>();
	        for(int s: scores)
	            li.add(s);
		List<Integer> ranks = new ArrayList<Integer>();
		int prev = 0;
		int rank =0;
		Collections.sort(li);
		Collections.reverse(li);

	
		for(int l: li) {
			if(l!=prev) {
				ranks.add(++rank);
			}else {
				ranks.add(rank);
			}
			prev = l;
		}
		
		for(int r: ranks) {
			System.out.println(r);
		}
		
	
		int index = 0;
		if (ranks.contains(cutOffRank))
			index = ranks.lastIndexOf(cutOffRank);
		else {
			for(int r: ranks) {
				if(r<=cutOffRank)
					index = ranks.lastIndexOf(r) ;
				else
					break;
			}
			
		}
		return index+1;
			
	}

}
