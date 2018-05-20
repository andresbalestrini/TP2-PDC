package ar.edu.ubp.pdc.utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFile {

	public static String getStringFromFile(String fileName) {
		String everything = "";
		try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {

			String line;
			while ((line = br.readLine()) != null) {
				System.out.println(line);
				everything += line;
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

		return everything;
	}
}
