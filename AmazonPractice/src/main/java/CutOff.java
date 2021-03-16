import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class CutOff {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> li = new ArrayList<Integer>( Arrays.asList(2,2,3,4,5));
		
		int output = countLevelUpPlayers(4, 5, li);  
		System.out.println(output);
	}
	
	public static int countLevelUpPlayers(int cutOffRank, int num, List<Integer> li) {
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
				
		if (ranks.contains(cutOffRank))
			return ranks.lastIndexOf(cutOffRank) + 1;
		else 
			return 0;
	}

}
