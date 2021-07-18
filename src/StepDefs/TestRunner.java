

package StepDefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)

@CucumberOptions(
		monochrome=true,
		plugin= {"pretty","html:target/cucmber.html"},
		features="src/features",
		tags= {"@NegativeLogin","@Sanity"},
		glue= {"StepDefs"}
		)

public class TestRunner {

}
