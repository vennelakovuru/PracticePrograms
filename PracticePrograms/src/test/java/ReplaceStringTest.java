import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.mockito.Mockito;

public class ReplaceStringTest {

	private ReplaceString replaceString;
	@Test
	public void checkString() throws Exception {
		Person p= Mockito.mock(Person.class);
//	replaceString.replace("hello",'h','k', p);
		Mockito.verify(p, Mockito.times(100)).help();;
		thrown.expect(p.help());
	}
}
