const quesData = {
    "questions": [
        {
            "id": 0,
            "description": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "The user enters the number of rows and columns, and the program prints the matrix.",
                "code": `import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main{
	public static void main(String[] args){
		int arr[][] = new int[3][3];
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);

		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[i].length; j++){
				System.out.print("Enter A"+i+j+"th value : ");
				try{
					arr[i][j] = Integer.parseInt(br.readLine());
				}
				catch(NumberFormatException ex){
					j--;
					System.out.println("Enter a valid number");
				}
				catch(Throwable th){
					j--;
					System.out.println("Something Went Wrong : " + th.getMessage());
				}
			}
		}
		System.out.println("Printing Matrix Values : ");
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < arr[i].length; j++){
				System.out.print(arr[i][j] + "\t");
			}
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 1,
            "description": "Program to Add Two Matrices",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program takes two matrices as input and outputs their sum.",
                "code": `class Main{
	static int[][] matrixAdd(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];
		if(mat1.length != mat2.length){
			return null;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = mat1[i][j] + mat2[i][j];
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixAdd(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Addition of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 2,
            "description": "Program to Multiply Two Matrices",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program multiplies two matrices and prints the result.",
                "code": `class Main{
	static int[][] matrixMultiply(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];

		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2.length){
				System.out.println("Multiplication Not Possible");
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = 0;
				for(int k = 0; k < mat2[i].length; k++){
					mat[i][j] += (mat1[i][k] * mat2[k][j]);
				}
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixMultiply(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Multiplication of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 3,
            "description": "Program to Subtract the Two Matrices",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program subtracts one matrix from another and prints the result.",
                "code": `class Main{
	static int[][] matrixSub(int mat1[][], int mat2[][]){
		int mat[][] = new int[mat1.length][mat1[0].length];
		if(mat1.length != mat2.length){
			return null;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return null;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				mat[i][j] = mat1[i][j] - mat2[i][j];
			}
		}
		return mat;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,1,1}};
		int[][] m2 = {{4,4,1}, {7,1,6}, {9,0,3}};
		int[][] res = matrixSub(m1, m2);
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println("Subtraction of above Matrix : ");
		printMatrix(res);
	}
}`
            }
        },
        {
            "id": 4,
            "description": "Program to Determine Whether Two Matrices are Equal",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "The program checks if two matrices are equal by comparing their elements.",
                "code": `class Main{
	static boolean isMatrixEqual(int mat1[][], int mat2[][]){
		if(mat1.length != mat2.length){
			return false;
		}
		for(int i = 0; i < mat1.length; i++){
			if(mat1[i].length != mat2[i].length){
				return false;
			}
		}
		for(int i = 0; i < mat1.length; i++){
			for(int j = 0; j < mat1[i].length; j++){
				if(mat1[i][j] != mat2[i][j]){
					return false;
				}
			}
		}
		return true;
	}

	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3}, {2,3,5}, {1,0,3}};
		int[][] m2 = {{1,2,3}, {2,3,5}, {1,0,3}};
		System.out.println("First Matrix : ");
		printMatrix(m1);
		System.out.println("Second Matrix : ");
		printMatrix(m2);
		System.out.println((isMatrixEqual(m1, m2)) ? "Both Matrix are Equal" : "Both Matrix are not Equal");
	}
}`
            }
        },
        {
            "id": 5,
            "description": "Program to Display the Lower Triangular Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program prints only the lower triangular part of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static void printLowerMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i < j){
					System.out.print(0+"\t");
				}
				else{
					System.out.print(mat[i][j]+"\t");
				}
			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Lower Triangular Matrix : ");
		printLowerMatrix(m1);
		
	}

}`
            }
        },
        {
            "id": 6,
            "description": "Program to Display the Upper Triangular Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program prints only the upper triangular part of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static void printUpperMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i > j){
					System.out.print(0+"\t");
				}
				else{
					System.out.print(mat[i][j]+"\t");
				}

			}
			System.out.println();
		}
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Upper Triangular Matrix : ");
		printUpperMatrix(m1);
		
	}

}`
            }
        },
        {
            "id": 7,
            "description": "Program to Find the Frequency of Odd & Even Numbers in the Given Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program counts how many odd and even numbers are in the matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static void oddEvenFrequency(int mat[][]){
		int odd = 0, even = 0;
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if((mat[i][j] % 2) == 0){
					even++;
				}
				else{
					odd++;
				}
			}
		}
		System.out.println("Count of odd Numbers : " + odd);
		System.out.println("Count of even Numbers : " + even);
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		oddEvenFrequency(m1);		
	}

}`
            }
        },
        {
            "id": 8,
            "description": "Program to Find the Sum of Each Row and Each Column of a Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "The program calculates the sum of each row and each column of the matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static void sumOfRowAndCol(int mat[][]){
		int sum = 0;
		for(int i = 0; i < mat.length; i++){
			sum = 0;
			for(int j = 0; j < mat[i].length; j++){
				sum += mat[i][j];
			}
			System.out.println("Sum of Row " + (i+1) + " : " + sum);
		}
		for(int i = 0; i < mat.length; i++){
			sum = 0;
			for(int j = 0; j < mat[i].length; j++){
				sum += mat[j][i];
			}
			System.out.println("Sum of Column " + (i+1) + " : " + sum);
		}

	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,3,4}, {52,2,3,5}, {1,7,5,3}, {8,1,8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		sumOfRowAndCol(m1);		
	}

}`
            }
        },
        {
            "id": 9,
            "description": "Program to Find the Transpose of a Given Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program finds the transpose of a matrix by swapping its rows and columns.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static int[][] transpose(int mat[][]){
		int[][] transpose = new int[mat[0].length][mat.length];
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				transpose[j][i] = mat[i][j];
			}
		}
		return transpose;
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2}, {52,2}, {1,3}, {8,3}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println("Transpose of Above Matrix");
		printMatrix(transpose(m1));		
	}

}`
            }
        },
        {
            "id": 10,
            "description": "Program to Determine Whether a Given Matrix is an Identity Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "The program checks whether the given matrix is an identity matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static boolean isIdentityMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(i == j){
					if(mat[i][j] != 1)
						return false;
				}
				else{
					if(mat[i][j] != 0)
						return false;
				}				
			}
		}
		return true;
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,9}, {52,2,2}, {1,3,8}};
		int[][] m2 = {{1,0,0}, {0,1,0}, {0,0,1}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println(isIdentityMatrix(m1) ? "Yes It is Identity matrix" : "No It is not an Identity matrix");
System.out.println("Matrix : ");
		printMatrix(m2);
		System.out.println(isIdentityMatrix(m2) ? "Yes It is Identity matrix" : "No It is not an Identity matrix");
	}

}`
            }
        },
        {
            "id": 11,
            "description": "Program to Transpose Matrix",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the transpose of a matrix.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static int[][] transpose(int arr[][]){
		for(int i = 1; i < arr.length; i++){
			if(arr[i].length != arr[i-1].length){
				return null;
			}
		}
		if(arr.length > 0){
			int mat[][] = new int[arr[0].length][arr.length];
			for(int i = 0; i < arr.length; i++){
				for(int j = 0; j < arr[i].length; j++){
					mat[j][i] = arr[i][j];				
				}
			}
			return mat;
		}
		else{
			return null;
		}
	}
	public static void main(String[] args){
		int arr[][] = {{9, 8, 5}, {5, 8, 5}, {9, 7,0}, {5, 8, 3}};
		System.out.println("Matrix : ");
		printMatrix(arr);
		System.out.println("Transpose : ");
		printMatrix(transpose(arr));
	}
}`
            }
        },
        {
            "id": 12,
            "description": "Program to Determine Whether a Given Matrix is a Sparse Matrix",
            "difficulty": "medium",
            "topic": 0,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "The program checks whether the matrix is sparse, i.e., has more zero elements than non-zero ones.",
                "code": `class Main{
	static void printMatrix(int mat[][]){
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				System.out.print(mat[i][j]+"\t");
			}
			System.out.println();
		}
	}
	static boolean isSparseMatrix(int mat[][]){
		int zeros = 0;
		for(int i = 0; i < mat.length; i++){
			for(int j = 0; j < mat[i].length; j++){
				if(mat[i][j] == 0){
					zeros++;
				}
				else{
					zeros--;
				}				
			}
		}
		return (zeros > 0) ? true : false;
		
	}
	public static void main(String[] args){
		int[][] m1 = {{1,2,9}, {52,2,2}, {1,3,8}};
		int[][] m2 = {{1,0,0}, {0,1,0}, {0,0,1}};
		System.out.println("Matrix : ");
		printMatrix(m1);
		System.out.println(isSparseMatrix(m1) ? "Yes It is Sparse matrix" : "No It is not an Sparse matrix");
		System.out.println("Matrix : ");
		printMatrix(m2);
		System.out.println(isSparseMatrix(m2) ? "Yes It is Sparse matrix" : "No It is not an Sparse matrix");
	}

}`
            }
        },
        // Functions
        {
            "id": 13,
            "description": "Write a Java method to find the smallest number among three numbers.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method compares three numbers and returns the smallest one.",
                "code": `class Main{
	static int minOfThree(int x, int y, int z){
		if(x < y){
			if(x < z){
				return x;
			}
			else{
				return z;
			}
		}
		else{
			if(y < z){
				return y;
			}
			else{
				return z;
			}
		}
	}
	public static void main(String[] args){	
		System.out.println("Minimum value of 105, 9, 209 is " + minOfThree(105,9,209));
	}
}`
            }
        },
        {
            "id": 14,
            "description": "Write a Java method to compute the average of three numbers.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method takes three numbers as input and returns their average.",
                "code": `class Main{
	static double avgOfThree(int x, int y, int z){
		return ((x + y + z)/3.0);
	}
	public static void main(String[] args){	
		System.out.println("Average of 105, 9, 209 is " + avgOfThree(105,9,209));
	}
}`
            }
        },
        {
            "id": 15,
            "description": "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates and prints the middle character(s) of a string.",
                "code": `class Main{
	static char[] midChar(String str){
		int len = str.length();
		if(len % 2 == 0){
			len /= 2;
			char[] arr = {str.charAt(len)};
			return arr;
		}
		else{
			len /= 2;
			char[] arr = {str.charAt(len), str.charAt(len+1)};
			return arr;
		}
	}
	public static void main(String[] args){
		char arr[];
		arr = midChar("hellow");
		if(arr.length == 1){
 			System.out.println("Middle Character = " + arr[0]);
		}
		else{
			System.out.println("Middle Character = " + arr[0] + " and " + arr[1]);
		} 
	}
}`
            }
        },
        {
            "id": 16,
            "description": "Write a Java method to count all the words in a string.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method counts the number of words in a given string by splitting it using spaces.",
                "code": `class Main{
	static int wordCount(String str){	
		int count = 0, len = str.length();
		
		for(int i = 0; i < len; i++){
			if(Character.isDigit(str.charAt(i))){
				while(str.charAt(i) != ' ' && (i+1) != len){
					i++;
				}
			}
			else{
				if((str.charAt(i) == ' ' || (i+1) == len) && Character.isLetter(str.charAt(i-1))){
				count++;
			}
			}
			
		}
		return count;
	}

	public static void main(String[] args){
		int count = wordCount("Java is a Programming Language");
		System.out.println("Number of words in string is : " + count);
	}
}`
            }
        },
        {
            "id": 17,
            "description": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method calculates the future investment value based on interest rate and years.",
                "code": `class Main{
	static double getFutureValue(double amt, double roi, int time){
		double fv = amt*Math.pow((1+(roi/100)), time);
		return fv;
	}
	public static void main(String[] args){
		System.out.println("Amount = 10000");
		System.out.println("Rate of Interest = 10");
		System.out.println("Years = 5");
		System.out.printf("Your Future Value is %.2f" , getFutureValue(10000.0, 10.0, 5));
	}
}`
            }
        },
        {
            "id": 18,
            "description": "Write a Java method to print characters between two characters (i.e. A to P).",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method prints all characters in the ASCII sequence between two specified characters.",
                "code": `class Main{
	static void charBetween(char a, char b){
		if(Character.compare(a, b) == 0 || ((a+1) == b)){
			System.out.println("No Characters are present between " + a + " and " + b);
		}
		else if(Character.compare(a, b) < 0){
			a++;
			while(a != b){
				System.out.print(a++ + "\t");
			}
		}
		else{
			b++;
			while(b != a){
				System.out.print(b++ + "\t");
			}
		}
	}
	public static void main(String[] args){
		System.out.println("Character Between A and F : ");
		charBetween('A', 'F');
	}
}`
            }
        },
        {
            "id": 19,
            "description": "Write a Java method to check whether a string is a valid password.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if a string satisfies certain password criteria, like length, uppercase, digits, etc.",
                "code": `class Main{
	static Boolean isPasswordValid(String str){
		int len = str.length(), charlen = 0;
		boolean hasnum = false, hassymbol = false;

		if(len < 12){
			return false;
		}
		for(int i = 0; i < len; i++){
			if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z' || str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
				charlen++;
			}
			else if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
				hasnum = true;
			}
			else if(str.charAt(i) >= '!' && str.charAt(i) <= '@'){
				hassymbol = true;	
			}
		}
		if(charlen >=8 && hasnum && hassymbol){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println(isPasswordValid("Abhishek@4204") ? "Password is Valid" : "Invalid Password" );
		System.out.println(isPasswordValid("Abhishek4204") ? "Password is Valid" : "Invalid Password" );
	}
}`
            }
        },
        {
            "id": 20,
            "description": "Write a Java method to display the current date and time.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method prints the current date and time using Java's date-time API.",
                "code": `class MyDateClass{
	java.util.Date obj = new java.util.Date();
	static void printDateAndTime(){
		java.util.Date obj = new java.util.Date();
		System.out.println("Date : "+obj.getDate()+"/"+obj.getMonth()+"/"+(obj.getYear()+1900));
		System.out.println("Time : "+obj.getHours()+"H:"+obj.getMinutes()+"M:"+obj.getSeconds()+"S");
	}
	public static void main(String args[]){
		printDateAndTime();
	}

}`
            }
        },
        {
            "id": 21,
            "description": "Write a Java method to find all twin prime numbers less than 100.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method identifies and prints all twin primes less than 100.",
                "code": `class Main{
	static Boolean isPrime(int num){
		for(int i = 2; i < num; i++){
			if(num % i == 0){
				return false;
			}
		}
		return true;
	}
	static void twinPrime(){
		int prevPrime = 0;
		for(int i = 3; i <= 100; i++){
			if(isPrime(i)){
				if((i - prevPrime) == 2){
					System.out.println(prevPrime + " and " + i + " are twin Prime");
				}
				prevPrime = i;
			}
		}
	}
	public static void main(String[] args){
		twinPrime();
	}
}`
            }
        },
        {
            "id": 22,
            "description": "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
            "difficulty": "easy",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method counts how many times the digit 2 appears in a non-negative integer.",
                "code": `class Main{
	static int numLength(int num){
		int count = 0;
		if(num > 0){
			while(num > 0){
				count++;
				num /= 10;
			}
		}
		return count;
	}
	public static void main(String[] args){
		System.out.println("Number of Digits in 55969 is : " + numLength(55969));
	}
}`
            }
        },
        {
            "id": 23,
            "description": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks whether the three integers are consecutive in value.",
                "code": `class Main{
	static boolean isConsecutive(int a, int b, int c){
		if(((a+1) == b && (a+2) == c) || (a+1) == c && (a+2) == b){
			return true;
		}
		else if(((b+1) == a && (b+2) == c) || ((b+1) == c && (b+2) == a)){
			return true;
		}
		else if(((c+1) == a && (c+2) == b) || (c+1) == b && (c+2) == a){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println((isConsecutive(9,10,8)) ? "Consecutive Numbers" : "Numbers are not Consecutive");
	}
}`
            }
        },
        {
            "id": 24,
            "description": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if one integer is the midpoint between the other two integers.",
                "code": `class Main{
	static boolean isOneMiddle(int a, int b, int c){
		if(a == (b+c)/2 || b == (a+c)/2 || c == (b+a)/2){
			return true;
		}
		return false;
	}
	public static void main(String[] args){
		System.out.println((isOneMiddle(10, 100, 55)) ? "Entered numbers contain middle number " : "Numbers does not contain middle number");
	}
}`
            }
        },
        {
            "id": 25,
            "description": "Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not. Return true if each character in the string is a vowel, otherwise return false.",
            "difficulty": "medium",
            "topic": 6,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This method checks if every character in the string is a vowel.",
                "code": `class Main{
	static boolean isVowel(char ch){
		if(ch == 'A' || ch == 'a' || ch == 'E' || ch == 'e' || ch == 'I' || ch == 'i' || ch == 'O' || ch == 'o' || ch == 'U' || ch == 'u'){
			return true;
		}
		return false;
	}
	static boolean hasAllVowel(String str){
		for(int i = 0; i < str.length(); i++){
			if(!isVowel(str.charAt(i))){
				return false;
			}
		}
		return true;
	}
	public static void main(String[] args){
		System.out.println((hasAllVowel("aerou")) ? "String Contains Vowels only" : "String Contains Vowels and Consonents");
	}
}`
            }
        },
        // Inheritance
        {
            "id": 26,
            "description": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class inheritance and method overriding.",
                "code": `class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Cat extends Animal {
    public void makeSound() {
        System.out.print("Meow");
    }
}

class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.makeSound(); 
    }
}
`
            }
        },
        {
            "id": 27,
            "description": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print 'Repairing a car'.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class inheritance and method overriding.",
                "code": `class Vehicle {
    void drive() {
        System.out.println("Driving a vehicle");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.print("Repairing a car");
    }
}

class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.drive();  
    }
}
`
            }
        },
        {
            "id": 28,
            "description": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates overriding methods for calculating area in a subclass.",
                "code": `class Shape {
    double getArea() {
        System.out.println("Calculating area of the shape");
        return 0.0;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    double getArea() {
        return length * width;
    }
}

class Main {
    public static void main(String[] args) {
        Rectangle myRectangle = new Rectangle(5.0, 3.0);

        System.out.println("Area of the rectangle: " + myRectangle.getArea()); 
    }
}
`
            }
        },
        {
            "id": 29,
            "description": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding and adding new methods in a subclass.",
                "code": `class Employee {
    private double salary;

    void setSalary(double amt) {
        salary = amt;
    }

    void work() {
        System.out.println("Employee is working");
    }

    double getSalary() {
        return salary;
    }
}

class HRManager extends Employee {
    HRManager(double salary) {
        setSalary(salary); 
    }

    void work() {
        System.out.println("HR Manager is managing employees of company");
    }

    Employee addEmployee(int salary) {
        Employee emp = new Employee();
	emp.setSalary(salary);
	return emp;
    }
}

class Main {
    public static void main(String[] args) {
        Employee newEmployee;

        HRManager hrManager = new HRManager(80000);
        hrManager.work();  
        System.out.println("Salary: " + hrManager.getSalary()); 
        newEmployee = hrManager.addEmployee(10000); 
	newEmployee.work();  
        System.out.println("Salary: " + newEmployee.getSalary()); 
    }
}
`
            }
        },
        {
            "id": 30,
            "description": "Write a Java program to create a class known as 'BankAccount' with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding with account balance restrictions.",
                "code": `class BankAccount {
    private double balance;

    BankAccount(double amt) {
        balance = amt;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid or insufficient funds for withdrawal.");
        }
    }

    double getBalance() {
        return balance;
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double startAmt) {
        super(startAmt);     
    }

    void withdraw(double amount) {
	System.out.println("Processing withdraw of "+amount+"Rs");
        if (getBalance() - amount >= 100) {
            super.withdraw(amount);
        } else {
            System.out.println("Withdrawal denied. Account balance cannot fall below 100.");
        }
    }
}

class Main {
    public static void main(String[] args) {
        SavingsAccount myAcct = new SavingsAccount(500.0);
	System.out.println("Initial Balance: " +myAcct.getBalance());
        myAcct.deposit(200.0); 
        System.out.println("Balance after deposit: " + myAcct.getBalance()); 

        myAcct.withdraw(300.0); 
        System.out.println("Balance after withdrawal: " + myAcct.getBalance()); 

        myAcct.withdraw(350.0); 
        System.out.println("Final balance: " + myAcct.getBalance()); 
    }
}
`
            }
        },
        {
            "id": 31,
            "description": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how subclasses can modify inherited behavior.",
                "code": `class Animal {
    void move() {
        System.out.println("Move");
    }
}

class Cheetah extends Animal {
    void move() {
        System.out.println("Run");
    }
}

class Main {
    public static void main(String[] args) {
        Cheetah myCheetah = new Cheetah();
        myCheetah.move();
    }
}
`
            }
        },
        {
            "id": 32,
            "description": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates method overriding and adding new properties in a subclass.",
                "code": `class Person{
	private String firstname, lastname;
	Person(String fname, String lname){
		firstname = fname;
		lastname = lname;
	}
	String getFirstName(){
		return firstname;
	}
	String getLastName(){
		return lastname;
	}
}

class Employee extends Person{
	private int empid;
	private String jobtitle;
	Employee(String fname, String lname, int id, String title){
		super(fname, lname);
		empid = id;
		jobtitle = title;
	}
	int getEmployeeId(){
		return empid;
	}
	String getLastName(){
		return super.getLastName() + " ( " + jobtitle + " ) ";
	}
}

class Main{
	public static void main(String args[]){
		Person p1 = new Person("Abhishek", "Dhawan");
		System.out.println("Normal Person : ");
		System.out.println("First Name : " + p1.getFirstName());
		System.out.println("Last Name : " + p1.getLastName());
	
		Employee emp1 = new Employee("Mark", "Zukerburg", 5595, "Facebook's CEO");
		System.out.println("Employee : ");
		System.out.println("Id : " + emp1.getEmployeeId());
		System.out.println("First Name : " + emp1.getFirstName());
		System.out.println("Last Name : " + emp1.getLastName());
	}
}`
            }
        },
        {
            "id": 33,
            "description": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding for specific shape calculations.",
                "code": `abstract class Shape {
    double getPerimeter(){return 0.0;}
    
    double getArea(){return 0.0;}
}

class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    double getPerimeter() {
        return 2 * Math.PI * radius;
    }

    double getArea() {
        return Math.PI * radius * radius;
    }
}

class Main {
    public static void main(String[] args) {
        Circle myCircle = new Circle(5.0);
        
        System.out.println("Perimeter of the circle: " + myCircle.getPerimeter());         	System.out.println("Area of the circle: " + myCircle.getArea());             }
}
`
            }
        },
        {
            "id": 34,
            "description": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates class hierarchies and method implementations for vehicles.",
                "code": null
            }
        },
        {
            "id": 35,
            "description": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates a class hierarchy with various employee roles.",
                "code": `abstract class Employee {
    private String name;
    private String address;
    private double salary;
    private String jobTitle;

    Employee(String name, String address, double salary, String jobTitle) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    abstract double calculateBonus();

    abstract void generatePerformanceReport();

    abstract void manageProjects();

    String getName() {
        return name;
    }

    String getAddress() {
        return address;
    }

    double getSalary() {
        return salary;
    }

    String getJobTitle() {
        return jobTitle;
    }
}

class Manager extends Employee {
    private int teamSize;

    Manager(String name, String address, double salary, String jobTitle, int team){
        super(name, address, salary, jobTitle);
        teamSize = team;
    }

    double calculateBonus() {
        return getSalary() * 0.10;
    }

    void generatePerformanceReport() {
        System.out.println("Manager " + getName() + " has successfully managed a team of " + teamSize + " members.");
    }

    void manageProjects() {
        System.out.println("Manager " + getName() + " is overseeing project progress and team performance.");
    }

    int getTeamSize() {
        return teamSize;
    }
}

class Developer extends Employee {
    private String programmingLanguage;

    Developer(String name, String address, double salary, String jobTitle, String language) {
        super(name, address, salary, jobTitle);
        programmingLanguage = language;
    }

    double calculateBonus() {
        return getSalary() * 0.08; 
    }

    void generatePerformanceReport() {
        System.out.println("Developer " + getName() + " is proficient in " + programmingLanguage + ".");
    }

    void manageProjects() {
        System.out.println("Developer " + getName() + " is working on coding tasks and software development.");
    }

    String getProgrammingLanguage() {
        return programmingLanguage;
    }
}

class Programmer extends Employee {
    private String projectAssigned;

    Programmer(String name, String address, double salary, String jobTitle, String project) {
        super(name, address, salary, jobTitle);
        projectAssigned = project;
    }

    double calculateBonus() {
        return getSalary() * 0.07;
    }

    void generatePerformanceReport() {
        System.out.println("Programmer " + getName() + " is working on project: " + projectAssigned + ".");
    }

    void manageProjects() {
        System.out.println("Programmer " + getName() + " is focusing on tasks related to project: " + projectAssigned + ".");
    }

    String getProjectAssigned() {
        return projectAssigned;
    }
}

class Main {
    public static void main(String[] args) {
        Manager manager = new Manager("Alice", "123 Elm St", 90000, "Team Manager", 10);
        Developer developer = new Developer("Bob", "456 Oak St", 80000, "Senior Developer", "Java");
        Programmer programmer = new Programmer("Charlie", "789 Pine St", 70000, "Junior Programmer", "Inventory System");

        System.out.println("Manager:");
        System.out.println("Name: " + manager.getName());
        System.out.println("Address: " + manager.getAddress());
        System.out.println("Salary: " + manager.getSalary());
        System.out.println("Job Title: " + manager.getJobTitle());
        System.out.println("Team Size: " + manager.getTeamSize());
        System.out.println("Bonus: " + manager.calculateBonus());
	manager.generatePerformanceReport();
        manager.manageProjects();

        System.out.println("\nDeveloper:");
        System.out.println("Name: " + developer.getName());
        System.out.println("Address: " + developer.getAddress());
        System.out.println("Salary: " + developer.getSalary());
        System.out.println("Job Title: " + developer.getJobTitle());
        System.out.println("Programming Language: " + 	developer.getProgrammingLanguage());
        System.out.println("Bonus: " + developer.calculateBonus());
        developer.generatePerformanceReport();
        developer.manageProjects();

        System.out.println("\nProgrammer:");
        System.out.println("Name: " + programmer.getName());
        System.out.println("Address: " + programmer.getAddress());
        System.out.println("Salary: " + programmer.getSalary());
        System.out.println("Job Title: " + programmer.getJobTitle());
        System.out.println("Project Assigned: " + programmer.getProjectAssigned());
        System.out.println("Bonus: " + programmer.calculateBonus());
        programmer.generatePerformanceReport();
        programmer.manageProjects();
    }
}
`
            }
        },
        {
            "id": 36,
            "description": "Create a program, showing an example of super keyword.",
            "difficulty": "easy",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of the super keyword in accessing superclass properties.",
                "code": `class MyClass{
	int x;
	void displayX(){
		System.out.println("Value of x in super class = " + x);
	}
}
class MyClassEx extends MyClass{
	int x;
	void setX(int val){
		x = val;
	}
	void displayX(){
		System.out.println("Value of x = " + x);
	}
	void setParentX(int val){
		super.x = val;
	}
	void printParentX(){
		super.displayX();
	}
}
class Main{
	public static void main(String[] args){
		MyClassEx obj = new MyClassEx();
		obj.setX(10);
		obj.setParentX(20);
		System.out.print("Without super keyword : ");
		obj.displayX();
		System.out.print("With super keyword : ");
		obj.printParentX();
	}
}`
            }
        },
        {
            "id": 37,
            "description": "Create a program, showing an example of super function.",
            "difficulty": "easy",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to call a superclass constructor using super().",
                "code": `class MyClass{
	MyClass(){
		System.out.println("Default Constructor of parent class");
	}
	MyClass(String msg){
		System.out.println("Parameterized Constructor of parent class");
	}
}
class MyClassEx extends MyClass{
	MyClassEx(){
		super();
	}
	MyClassEx(String msg){
		super(msg);
	}
}
class Main{
	public static void main(String[] args){
		MyClassEx obj, obj1;
		obj = new MyClassEx();
		obj1 = new MyClassEx("My");
	}
}`
            }
        },
        {
            "id": 38,
            "description": "Create a program, showing an example of method overriding.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overriding in subclasses.",
                "code": `class Father{
	void worship(){
		System.out.println("Jai Shree Ganesh");
	}
	void billing(){
		System.out.println("Works Mannually on Paper");
	}
}
class Son extends Father{
	void billing(){
		System.out.println("Use Automated Billing System");
	}
}
class Main{
	public static void main(String[] args){
		Son s = new Son();
		System.out.print("Overrided Method : ");
		s.billing();
		System.out.print("Non Overrided Method : ");
		s.worship();
	}
}`
            }
        },
        {
            "id": 39,
            "description": "Create a program, showing an example of dynamic method dispatch.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates dynamic method dispatch through polymorphism.",
                "code": `class MyClass{
	int x;
	void display(){
		System.out.println("x = "+x);
	}
	void printMsg(){
		System.out.println("Parent Class");
	}
}
class MyClassEx extends MyClass{
	void printMsg(){
		System.out.println("Child Class");
	}
}
class Main{
	public static void main(String[] args){
		MyClass obj = new MyClassEx();
		obj.x = 10;
		obj.display();
		obj.printMsg();
	}
}`
            }
        },
        {
            "id": 40,
            "description": "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows the use of abstract classes and methods.",
                "code": `abstract class Animal {
    abstract void sound();
}

class Lion extends Animal {
    void sound() {
        System.out.println("Lion Roars");
    }
}

class Tiger extends Animal {
    void sound() {
        System.out.println("Tiger Growls");
    }
}

class Main {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();

        lion.sound(); 
        tiger.sound();
    }
}
`
            }
        },
        {
            "id": 41,
            "description": "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes and method implementation in subclasses.",
                "code": `abstract class Shape {
    abstract double calculateArea();
    
    abstract double calculatePerimeter();
}

class Circle extends Shape {
    private double radius;

    Circle(double r) {
        radius = r;
    }

    double calculateArea() {
        return Math.PI * radius * radius;
    }

    double calculatePerimeter() {
        return 2 * Math.PI * radius; 
    }

    double getRadius() {
        return radius;
    }
}

class Triangle extends Shape {
    private double side1;
    private double side2;
    private double side3;

    Triangle(double a, double b, double c) {
        side1 = a;
        side2 = b;
        side3 = c;
    }

    double calculateArea() {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    double calculatePerimeter() {
        return side1 + side2 + side3; 
    }

     double getSide1() {
        return side1;
    }

     double getSide2() {
        return side2;
    }

     double getSide3() {
        return side3;
    }
}

class Main {
     public static void main(String[] args) {
        Shape circle = new Circle(5.0);
        System.out.println("Circle:");
        System.out.println("Radius: " + ((Circle) circle).getRadius());
        System.out.println("Area: " + circle.calculateArea());
        System.out.println("Perimeter: " + circle.calculatePerimeter());

        Shape triangle = new Triangle(3.0, 4.0, 5.0);
        System.out.println("\nTriangle:");
        System.out.println("Sides: " + ((Triangle) triangle).getSide1() + ", " 
                            + ((Triangle) triangle).getSide2() + ", " 
                            + ((Triangle) triangle).getSide3());
        System.out.println("Area: " + triangle.calculateArea());
        System.out.println("Perimeter: " + triangle.calculatePerimeter());
    }
}
`
            }
        },
        {
            "id": 42,
            "description": "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for bank accounts and their implementations.",
                "code": `abstract class BankAccount {
    double balance;

    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    abstract void deposit(double amount);

    abstract void withdraw(double amount);

    double getBalance() {
        return balance;
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;

    SavingsAccount(double initialBalance, double ir) {
        super(initialBalance);
        interestRate = ir;
    }

    void deposit(double amount) {
        if (amount >= 100) {
            balance += amount;
            System.out.println("Deposited " + amount + " into Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Minimum Deposit Amount is 100");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from Savings Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds.");
        }
    }

    void calculateInterest() {
        double interest = balance * (interestRate / 100);
        balance += interest;
        System.out.println("Interest of " + interest + " added to Savings Account. New Balance: " + balance);
    }
}

class CurrentAccount extends BankAccount {
    private double overdraftLimit;

    CurrentAccount(double initialBalance, double draftLmt) {
        super(initialBalance);
        overdraftLimit = draftLmt;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited " + amount + " into Current Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;
            System.out.println("Withdrew " + amount + " from Current Account. New Balance: " + balance);
        } else {
            System.out.println("Invalid withdrawal amount or exceeded overdraft limit.");
        }
    }
}

class Main {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount(1000, 5);
	System.out.println("Saving Account : Initial Amount " + savingsAccount.getBalance());
        savingsAccount.deposit(200);
        savingsAccount.withdraw(150);
        savingsAccount.calculateInterest();


        CurrentAccount currentAccount = new CurrentAccount(500, 300);
	System.out.println("Current Account : Initial Amount " + currentAccount.getBalance());
        currentAccount.deposit(100);
        currentAccount.withdraw(700); 
        currentAccount.withdraw(200); 
    }
}
`
            }
        },
        {
            "id": 43,
            "description": "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows how to define abstract methods and implement them in subclasses.",
                "code": `abstract class Animal {
     abstract void eat();

     abstract void sleep();
}

class Lion extends Animal {
     void eat() {
        System.out.println("The lion eats meat");
    }

     void sleep() {
        System.out.println("The lion sleeps for 19-20 hours a day.");
    }
}

class Tiger extends Animal {
     void eat() {
        System.out.println("The tiger eats meat");
    }

     void sleep() {
        System.out.println("The tiger sleeps for 16-20 hours a day.");
    }
}

class Deer extends Animal {
     void eat() {
        System.out.println("The deer grazes on grass and plants.");
    }
    
     void sleep() {
        System.out.println("The deer sleeps for 4-6 hours a day in short intervals.");
    }
}

class Main {
     public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();
        Animal deer = new Deer();

        System.out.println("Lion:");
        lion.eat();
        lion.sleep();

        System.out.println("Tiger:");
        tiger.eat();
        tiger.sleep();

        System.out.println("Deer:");
        deer.eat();
        deer.sleep();
    }
}
`
            }
        },
        {
            "id": 44,
            "description": "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for employee roles and their implementations.",
                "code": `abstract class Employee {
    String name;
    int age;
    double baseSalary;
    double bonus;

     Employee(String nm, int ag, double bs, double bn) {
        name = nm;
        age = ag;
        baseSalary = bs;
	bonus = bn;
    }

     abstract double calculateSalary();

     abstract void displayInfo();
}

class Manager extends Employee {
    
     Manager(String name, int age, double baseSalary, double bonus) {
        super(name, age, baseSalary, bonus);
    }

     double calculateSalary() {
        return baseSalary + bonus; 
    }

     void displayInfo() {
        System.out.println("Manager Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Base Salary: " + baseSalary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Salary: " + calculateSalary());
    }
}

class Programmer extends Employee {
    private int overtimeHours;
    private double overtimeRate;

     Programmer(String name, int age, double baseSalary, double bonus, int oth, double otr) {
        super(name, age, baseSalary, bonus);
        overtimeHours = oth;
        overtimeRate = otr;
    }

     double calculateSalary() {
        return baseSalary + bonus + (overtimeHours * overtimeRate); 
    }

     void displayInfo() {
        System.out.println("Programmer Information:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Base Salary: " + baseSalary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Overtime Hours: " + overtimeHours);
        System.out.println("Overtime Rate: " + overtimeRate);
        System.out.println("Total Salary: " + calculateSalary());
    }
}

 class Main {
     public static void main(String[] args) {
        Employee manager = new Manager("Abhishek", 45, 5000, 1500);
        manager.displayInfo(); 

        Employee programmer = new Programmer("Misbah", 30, 4000, 700, 10, 50);
        programmer.displayInfo(); 
    }
}
`
            }
        },
        {
            "id": 45,
            "description": "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for 3D shapes and their implementations.",
                "code": `abstract class Shape3D {
    abstract double calculateVolume();
    abstract double calculateSurfaceArea();
}

class Sphere extends Shape3D {
    double radius;

    Sphere(double r) {
        radius = r;
    }

    double calculateVolume() {
        return ((4.0 / 3.0) * Math.PI * radius * radius * radius);
    }

    double calculateSurfaceArea() {
        return (4 * Math.PI * radius * radius);
    }
}

class Cube extends Shape3D {
    double side;

    Cube(double s) {
        side = s;
    }

    double calculateVolume() {
        return (side * side * side);
    }

    double calculateSurfaceArea() {
        return (6 * side * side);
    }
}

class Main {
    public static void main(String[] args) {
        Shape3D sphere = new Sphere(5);
        System.out.println("Sphere Volume: " + sphere.calculateVolume());
        System.out.println("Sphere Surface Area: " + sphere.calculateSurfaceArea());

        Shape3D cube = new Cube(4);
        System.out.println("Cube Volume: " + cube.calculateVolume());
        System.out.println("Cube Surface Area: " + cube.calculateSurfaceArea());
    }
}
`
            }
        },
        {
            "id": 46,
            "description": "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for vehicle operations.",
                "code": `abstract class Vehicle{
	abstract void startEngine();
	abstract void stopEngine();
}

class Car extends Vehicle{
	void startEngine(){
		System.out.println("Car Engine Started");
	}
	void stopEngine(){
		System.out.println("Car Engine Stopped");
	}
}

class Motorcycle extends Vehicle{
	void startEngine(){
		System.out.println("Motorcycle Engine Started");
	}
	void stopEngine(){
		System.out.println("Motorcycle Engine Stopped");
	}
}

class Main{
	public static void main(String[] args){
		Car mycar = new Car();
		mycar.startEngine();
		mycar.stopEngine();


		Motorcycle mymotor = new Motorcycle();
		mymotor.startEngine();
		mymotor.stopEngine();
	}
}	`
            }
        },
        {
            "id": 47,
            "description": "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows abstract classes for different types of persons and their behaviors.",
                "code": `abstract class Person{
	abstract void eat();
	abstract void exercise();
}

class Athlete extends Person{
	void eat(){
		System.out.println("Likes to eat healthy meal like Green Vegetables etc ");
	}
	void exercise(){
		System.out.println("Doing exercise regularly");
	}
}


class LazyPerson extends Person{
	void eat(){
		System.out.println("Like to eat fast food more often");
	}
	void exercise(){
		System.out.println("Not able to do exercise for whole life");
	}
}

class Main{
	public static void main(String[] args){
		Athlete ath = new Athlete();
		System.out.println("Athelete : ");
		ath.eat();
		ath.exercise();

		System.out.println("Lazy Person : ");
		LazyPerson lp = new LazyPerson();
		lp.eat();
		lp.exercise();
	}
}`
            }
        },
        {
            "id": 48,
            "description": "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for musical instruments.",
                "code": `abstract class Instrument {
    abstract void play();
    abstract void tune();
}

class Glockenspiel extends Instrument {
    void play() {
        System.out.println("Playing the Glockenspiel with mallets");
    }

    void tune() {
        System.out.println("Tuning the Glockenspiel by adjusting the metal bars");
    }
}

class Violin extends Instrument {
    void play() {
        System.out.println("Playing the Violin with a bow");
    }

    void tune() {
        System.out.println("Tuning the Violin by adjusting the pegs");
    }
}

class Main {
    public static void main(String[] args) {
        Instrument glockenspiel = new Glockenspiel();
        glockenspiel.play();
        glockenspiel.tune();

        Instrument violin = new Violin();
        violin.play();
        violin.tune();
    }
}
`
            }
        },
        {
            "id": 49,
            "description": "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program illustrates abstract classes for 2D shapes.",
                "code": `abstract class Shape2D {
    abstract void draw();
    abstract void resize(double scaleAmt);
}

class Rectangle extends Shape2D {
    double width;
    double height;

    Rectangle(double w, double h) {
       	width = w;
        height = h;
    }

    void draw() {
        System.out.println("Drawing a rectangle with width " + width + " and height " + height);
    }

    void resize(double scaleAmt) {
        width *= scaleAmt;
        height *= scaleAmt;
        System.out.println("Resized rectangle to width " + width + " and height " + height);
    }
}

class Circle extends Shape2D {
    double radius;

    Circle(double r) {
        radius = r;
    }

    void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    void resize(double scaleAmt) {
        radius *= scaleAmt;
        System.out.println("Resized circle to radius " + radius);
    }
}

class Main {
    public static void main(String[] args) {
        Shape2D rectangle = new Rectangle(4, 5);
        rectangle.draw();
        rectangle.resize(1.5);

        Shape2D circle = new Circle(3);
        circle.draw();
        circle.resize(2);
    }
}
`
            }
        },
        {
            "id": 50,
            "description": "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program shows abstract classes for birds and their behaviors.",
                "code": `abstract class Bird {
    abstract void fly();
    abstract void makeSound();
}

class Eagle extends Bird {
    void fly() {
        System.out.println("The eagle soars high in the sky with powerful wing strokes.");
    }

    void makeSound() {
        System.out.println("The eagle makes a sharp screeching sound.");
    }
}

class Hawk extends Bird {
    void fly() {
        System.out.println("The hawk glides swiftly and dives at high speed.");
    }

    void makeSound() {
        System.out.println("The hawk emits a high-pitched, shrill scream.");
    }
}

class Main {
    public static void main(String[] args) {
        Bird eagle = new Eagle();
        eagle.fly();
        eagle.makeSound();

        Bird hawk = new Hawk();
        hawk.fly();
        hawk.makeSound();
    }
}

`
            }
        },
        {
            "id": 51,
            "description": "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape.",
            "difficulty": "medium",
            "topic": 9,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes for geometric shapes.",
                "code": `abstract class GeometricShape {
    abstract double area();
    abstract double perimeter();
}

class Triangle extends GeometricShape {
    double base;
    double height;
    double side1;
    double side2;
    double side3;

    Triangle(double bs, double hgt, double a, double b, double c) {
        base = bs;
        height = hgt;
        side1 = a;
        side2 = b;
        side3 = c;
    }

    double area() {
        return (0.5 * base * height);
    }

    double perimeter() {
        return (side1 + side2 + side3);
    }
}

class Square extends GeometricShape {
    double side;

    Square(double a) {
        side = a;
    }

    double area() {
        return (side * side);
    }

    double perimeter() {
        return (4 * side);
    }
}

class Main {
    public static void main(String[] args) {
        GeometricShape triangle = new Triangle(5, 3, 5, 4, 6);
        System.out.println("Triangle Area: " + triangle.area());
        System.out.println("Triangle Perimeter: " + triangle.perimeter());

        GeometricShape square = new Square(4);
        System.out.println("Square Area: " + square.area());
        System.out.println("Square Perimeter: " + square.perimeter());
    }
}`
            }
        },
        {
            "id": 52,
            "description": "Enter the character from user using InputStreamReader",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a character using InputStreamReader.",
                "code": `import java.io.InputStreamReader;

class Main{
	public static void main(String[] args){
		char ch = ' ';
		InputStreamReader isr = new InputStreamReader(System.in);
		System.out.print("Enter Any Character : ");
		try{
			ch = (char) isr.read();
		}
		catch(java.io.IOException exp){
			System.out.println("Any Hardware Issue Occured");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " +th.getMessage());
		}
		System.out.println("Value Entered : " + ch);
	}
}`
            }
        },
        {
            "id": 53,
            "description": "Enter the string from user using BufferedReader",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a string using BufferedStreamReader.",
                "code": `import java.io.InputStreamReader;
import java.io.BufferedReader;

class Main{
	public static void main(String[] args){
		String str = "";
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);
		System.out.println("Enter String : ");
		try{
			str = br.readLine();
		}
		catch(java.io.IOException exp){
			System.out.println("Any Hardware Issue Occured");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " +th.getMessage());
		}
		System.out.println("String Entered : " + str);
	}
}`
            }
        },
        {
            "id": 54,
            "description": "Enter the integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter an integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		int var = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Integer Value : ");
		try{
			var = sc.nextInt();
			System.out.println("Integer Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Integer Values");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 55,
            "description": "Enter the float from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a float value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		float var = 0.0f;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Float Value : ");
		try{
			var = sc.nextFloat();
			System.out.println("Float Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Float Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 56,
            "description": "Enter the double from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a double value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		double var = 0.0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter floating point Value : ");
		try{
			var = sc.nextDouble();
			System.out.println("Double Type Value : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Non Numeric Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 57,
            "description": "Enter the boolean from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a boolean value using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		boolean var = false;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter true/false Value : ");
		try{
			var = sc.nextBoolean();
			System.out.println("Value Entered : " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 58,
            "description": "Enter the short integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a short integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		short var = 0;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Value Between -32768 and 32767 : ");
		try{
			var = sc.nextShort();
			System.out.println("Value Entered: " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 59,
            "description": "Enter the long integer from user using Scanner class",
            "difficulty": "easy",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to enter a long integer using the Scanner class.",
                "code": `import java.util.Scanner;

class Main{
	public static void main(String[] args){
		long var = 0L;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter Value Between -9223372036854775808 and 9223372036854775807 : ");
		try{
			var = sc.nextLong();
			System.out.println("Value Entered: " + var);
		}
		catch(java.util.InputMismatchException ime){
			System.out.println("Entered Wrong Value");
		}
		catch(Throwable th){
			System.out.println("Unexpected Error : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 60,
            "description": "Get all characters from the file and display on the screen",
            "difficulty": "medium",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to read all characters from a file and display them.",
                "code": `class Main{
	public static void main(String[] args) throws java.io.IOException, java.io.FileNotFoundException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		int ch = 5;
		System.out.println("Content of my.txt File is below : \n");
		while((ch = isr.read()) != -1){
			System.out.print((char)ch);
		}
	}
}`
            }
        },
        {
            "id": 61,
            "description": "Get all characters from the file, count number of lines, words, characters and display on the screen",
            "difficulty": "medium",
            "topic": 10,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to read a file and count lines, words, and characters.",
                "code": `class Main{
	public static void main(String[] args) throws java.io.IOException, java.io.FileNotFoundException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		int ch = 5, numoflines = 0, numofchars = 0, wordcount = 0;
		System.out.println("Content of my.txt File is below : \n");
		while((ch = isr.read()) != -1){
			numofchars++;
			System.out.print((char)ch);
			if(Character.isLetterOrDigit(((char)ch))){
				while((ch = isr.read()) != -1 && ((char)ch) != '\n' && ((char)ch) != ' '){
					numofchars++;
					System.out.print((char)ch);
				}
				wordcount++;
			}
			if(((char)ch) == '\n'){
				numoflines++;
				System.out.print((char)ch);
			}
			if(((char)ch) == ' '){
				System.out.print((char)ch);
			}
		}
		System.out.println("\nNumber of Lines : " + ++numoflines);
		System.out.println("Number of Characters : " + numofchars);
		System.out.println("Number of Words : " + wordcount);
	}
}`
            }
        },
        // Interfaces
        {
            "id": 62,
            "description": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement the Shape interface for different shapes and calculate their areas.",
                "code": `interface Shape {
    double getArea();
}

class Rectangle implements Shape {
    private double length, breadth;

    Rectangle(double l, double b) {
        length = l;
        breadth = b;
    }

    public double getArea() {
        return (length * breadth);
    }
}

class Circle implements Shape {
    private double radius;

    Circle(double r) {
        radius = r;
    }

    public double getArea() {
        return (Math.PI * radius * radius);
    }
}

class Triangle implements Shape {
    private double base, height;

    Triangle(double bs, double hgt) {
        base = bs;
        height = hgt;
    }

    public double getArea() {
        return (0.5 * base * height);
    }
}

class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(4, 5);
        System.out.println("Rectangle Area: " + rectangle.getArea());

        Shape circle = new Circle(3);
        System.out.println("Circle Area: " + circle.getArea());

        Shape triangle = new Triangle(4, 6);
        System.out.println("Triangle Area: " + triangle.getArea());
    }
}
`
            }
        },
        {
            "id": 63,
            "description": "Write a Java program to create an Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides bark() to print 'Dog is barking'.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create an interface and implement it in a class.",
                "code": `interface Animal {
    void speak();
}

class Dog implements Animal {

    public void speak() {
        System.out.println("Dog is barking");
    }
}

class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.speak();
    }
}
`
            }
        },
        {
            "id": 64,
            "description": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement an interface in multiple classes.",
                "code": `interface Flyable {
    void fly_obj();
}

class Spacecraft implements Flyable {
    public void fly_obj() {
        System.out.println("Spacecraft is flying in space.");
    }
}

class Airplane implements Flyable {
    public void fly_obj() {
        System.out.println("Airplane is flying in the sky.");
    }
}

class Helicopter implements Flyable {
    public void fly_obj() {
        System.out.println("Helicopter is flying above the ground.");
    }
}

class Main {
    public static void main(String[] args) {
        Flyable spacecraft = new Spacecraft();
        spacecraft.fly_obj();

        Flyable airplane = new Airplane();
        airplane.fly_obj();

        Flyable helicopter = new Helicopter();
        helicopter.fly_obj();
    }
}
`
            }
        },
        {
            "id": 65,
            "description": "Write a Java program to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates a banking system with interfaces and multiple account types.",
                "code": `interface Account{
	boolean deposit(double amt);
	boolean withdraw(double amt);
	double calcInterest();
	void viewBalance();
}
class Bank{
	java.util.List<Account> accnts;
	Bank(){
		accnts = new java.util.ArrayList<>();
	}
	boolean addAccount(Account obj){
		return accnts.add(obj);
	}
}
class SavingAccount implements Account{
	double balance;
	int limit = 80000;
	public boolean deposit(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else{
			balance += amt;
			System.out.println(amt + " Deposited Successfully");
			viewBalance();
			return true;
		}
	}
	public boolean withdraw(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else if(amt > limit){
			System.out.println("Your Withdrawl Limit is " + limit);
			return false;
		}
		else if((balance-amt) < 0){
			System.out.println("Insufficient Balance in account");
			viewBalance();
			return false;
		}
		else{
			balance -= amt;
			System.out.println(amt + " Withdrawl Successfully");
			viewBalance();
			return true;
		}
	}
	public double calcInterest(){
		return (0.03 * balance);
	}
	public void viewBalance(){
		System.out.println("Account Balance : " + balance);
	}
}
class CurrentAccount implements Account{
	double balance;
	int overdraftlimit = 10000;
	public boolean deposit(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else{
			balance += amt;
			System.out.println(amt + " Deposited Successfully");
			viewBalance();
			return true;
		}
	}
	public boolean withdraw(double amt){
		if(amt <= 0){
			System.out.println("Amount Should be greater than 0");
			return false;
		}
		else if(((balance+overdraftlimit)-amt) < 0){
			System.out.println("Insufficient Balance in account");
			viewBalance();
			return false;
		}
		else{
			balance -= amt;
			System.out.println(amt + " Withdrawl Successfully");
			viewBalance();
			return true;
		}
	}
	public double calcInterest(){
		return 0.0;
	}
	public void viewBalance(){
		System.out.println("Account Balance : " + balance);
		System.out.println("Over Draft Limit : " + overdraftlimit);

	}
}

class Main{
	public static void main(String[] args){
		Bank sbi = new Bank();

		SavingAccount acc1 = new SavingAccount();
		CurrentAccount acc2 = new CurrentAccount();
		
		sbi.addAccount(acc1);
		sbi.addAccount(acc2);

		System.out.println("Account Type : Saving Account");

		acc1.deposit(80000);
		System.out.println("Annually Interest : " + acc1.calcInterest());
		acc1.withdraw(90000);
		acc1.withdraw(10000);

		System.out.println("Account Type : Current Account");

		acc2.deposit(5000);
		System.out.println("Annually Interest : " + acc2.calcInterest());
		acc2.withdraw(7000);
		acc2.withdraw(10000);
	}
}`
            }
        },
        {
            "id": 66,
            "description": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a resizable rectangle class using an interface.",
                "code": `interface Resizable{
	int resizeWidth(int width);
	int resizeHeight(int height);
	void display();
}
class Rectangle implements Resizable{
	int length, breadth;
	Rectangle(int width, int height){
		breadth = width;
		length = height;
	}
	public void display(){
		System.out.println("Height of Rectangle : " + length);
		System.out.println("Width of Rectangle : " + breadth);
	}
	public int resizeWidth(int width){
		breadth = width;
		return breadth;
	}
	public int resizeHeight(int height){
		length = height;
		return length;
	}
}
class Main{
	public static void main(String[] args){
		Resizable obj = new Rectangle(15, 5);
		System.out.println("Initial Dimensions : ");
		obj.display();
		obj.resizeWidth(25);
		obj.resizeHeight(10);
		System.out.println("Dimensions After Resizing: ");
		obj.display();
	}
}`
            }
        },
        {
            "id": 67,
            "description": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a drawable shape class using an interface.",
                "code": `interface Drawable{
	void draw();
}
class Circle implements Drawable{
	public void draw(){
		System.out.println("Drawing Circle");
	}
}
class Rectangle implements Drawable{
	public void draw(){
		System.out.println("Drawing Rectangle");
	}
}
class Triangle implements Drawable{
	public void draw(){
		System.out.println("Drawing Triangle");
	}
}
class Main{
	public static void main(String[] args){
		Drawable obj = new Circle();
		obj.draw();
		obj = new Rectangle();
		obj.draw();
		obj = new Triangle();
		obj.draw();
	}

}`
            }
        },
        {
            "id": 68,
            "description": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates sorting algorithms using an interface.",
                "code": `interface Sortable{
	void sort(int arr[]);
}
class BubbleSort implements Sortable{
	public void sort(int arr[]){
		System.out.println("Bubble Sort Implemented");
		for(int i = 0; i < arr.length; i++){
			for(int j = 0; j < (arr.length-i-1); j++){
				if(arr[j] > arr[j+1]){
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
	}
}
class SelectionSort implements Sortable{
	public void sort(int arr[]){
		System.out.println("Selection Sort Implemented");
		for(int i = 0; i < arr.length; i++){
			for(int j = i+1; j < arr.length; j++){
				if(arr[i] > arr[j]){
					int temp = arr[i];
					arr[i] = arr[j];								arr[j] = temp;
				}
			}
		}
	}
}

class Main{
	public static void main(String args[]){
		Sortable sr = new BubbleSort();
		int arr[] = {58, 4, 11, 26, 49, 98, 37};
		int arr2[] = {105, 85, 71, 526, 76, 20};
		System.out.println("Array 1 : " + java.util.Arrays.toString(arr));
		sr.sort(arr);
        	System.out.println("Bubble Sort : " + java.util.Arrays.toString(arr));
		sr = new SelectionSort();
		System.out.println("Array 2 : " + java.util.Arrays.toString(arr2));
		sr.sort(arr2);
        	System.out.println("Selection Sort : " + java.util.Arrays.toString(arr2));
	}
}`
            }
        },
        {
            "id": 69,
            "description": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
            "difficulty": "easy",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create a playable class using an interface.",
                "code": `interface Playable{
	void play();
}
class Football implements Playable{
	public void play(){
		System.out.println("Playing Football");
	}
}
class Volleyball implements Playable{
	public void play(){
		System.out.println("Playing Volleyball");
	}
}
class Basketball implements Playable{
	public void play(){
		System.out.println("Playing Basketball");
	}
}
class Main{
	public static void main(String args[]){
		Playable obj = new Football();
		obj.play();
		obj = new Volleyball();
		obj.play();
		obj = new Basketball();
		obj.play();
	}
}`
            }
        },
        {
            "id": 70,
            "description": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
            "difficulty": "medium",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement a search functionality in multiple classes.",
                "code": `interface Searchable{
	boolean search(String keyword);
}
class Document implements Searchable{
	String content, filename;
	Document(String name, String filecontent){
		filename = name;
		content = filecontent;
	}
	public boolean search(String keyword){
		System.out.println("Searching " + keyword + " in " + filename);
		return content.contains(keyword);
	}
}
class WebPage implements Searchable{
	String content, url;
	WebPage(String pageurl, String filecontent){
		url = pageurl;
		content = filecontent;
	}
	public boolean search(String keyword){
		System.out.println("Searching " + keyword + " in " + url);
		return content.contains(keyword);
	}
}

class Main{
	public static void main(String[] args){
		Searchable obj = new Document("my.txt", "Hello I am Abhishek");
		System.out.println(obj.search("Hello") ? "Document contain Hello" : "Document does not contain Hello");
		System.out.println(obj.search("No") ? "Document contain No" : "Document does not contain No");
		obj = new WebPage("my.html", "Trees are very important aspect for our life ...");
		System.out.println(obj.search("life") ? "Webpage contain life" : "Webpage does not contain life");
		System.out.println(obj.search("No") ? "Webpage contain No" : "Webpage does not contain No");
	}
}`
            }
        },
        {
            "id": 71,
            "description": "Write a Java program to create an interface Encryptable with methods encrypt(String data) and decrypt(String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates encryption and decryption using interfaces.",
                "code": null
            }
        },
        {
            "id": 72,
            "description": "Write a Java program to create an interface Sortable with a method sort(int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
            "difficulty": "hard",
            "topic": 11,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to implement sorting algorithms using an interface.",
                "code": `interface Sortable {
    void sort(int[] array);
}

class QuickSort implements Sortable {
    public void sort(int[] array) {
        quickSort(array, 0, array.length - 1);
    }

    private void quickSort(int[] array, int low, int high) {
        if (low < high) {
            int pi = partition(array, low, high);
            quickSort(array, low, pi - 1);
            quickSort(array, pi + 1, high);
        }
    }

    private int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (array[j] > pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
}

class MergeSort implements Sortable {
    public void sort(int[] array) {
        if (array.length < 2) return;
        mergeSort(array, 0, array.length - 1);
    }

    private void mergeSort(int[] array, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);
            merge(array, left, mid, right);
        }
    }

    private void merge(int[] array, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) 
		L[i] = array[left + i];
        for (int j = 0; j < n2; j++) 
		R[j] = array[mid + 1 + j];

        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] >= R[j]) array[k++] = L[i++];
            else array[k++] = R[j++];
        }

        while (i < n1) 
		array[k++] = L[i++];
        while (j < n2) 
		array[k++] = R[j++];
    }
}

class Main {
    public static void main(String[] args) {
        int[] array1 = {5, 2, 9, 1, 5, 6};
        int[] array2 = {3, 8, 4, 1, 7, 9};

        Sortable quickSort = new QuickSort();
	System.out.println("Array 1 : " + java.util.Arrays.toString(array1));
        quickSort.sort(array1);
        System.out.println("QuickSort Descending: " + java.util.Arrays.toString(array1));

        Sortable mergeSort = new MergeSort();
	System.out.println("Array 2 : " + java.util.Arrays.toString(array1));
        mergeSort.sort(array2);
        System.out.println("MergeSort Descending: " + java.util.Arrays.toString(array2));
    }
}
`
            }
        },
        // OOPS
        {
            "id": 73,
            "description": "Write a Java program to create a class called 'Person' with a name and age attribute. Create two instances of the 'Person' class, set their attributes using the constructor, and print their name and age.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates how to create instances of a class and set attributes using a constructor.",
                "code": `class Person{
	String name;
	short age;
	Person(String n,short ag){
		name = n;
		age = ag;
	}
	void display(){
		System.out.println("Name : " + name + "\t Age : " + age);
		System.out.println();
	}
}
class Main{
	public static void main(String[] args){
		Person p1 = new Person("Abhishek", (short)21);
		Person p2 = new Person("Manya", (short)19);
		System.out.println("Person 1 : ");
		p1.display();
		System.out.println("Person 2 : ");
		p2.display();
	}
}`
            }
        },
        {
            "id": 74,
            "description": "Write a Java program to create a class called 'Dog' with a name and breed attribute. Create two instances of the 'Dog' class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates creating and modifying objects using setter methods.",
                "code": `class Dog{
	String name, breed;
	Dog(String n, String br){
		name = n;
		breed = br;
	}
	void setName(String n){
		name = n;
	}
	void setBreed(String br){
		breed = br;
	}
	void display(){
		System.out.println("Name : " + name + "\t Breed : " + breed);
		System.out.println();
	}
}
class Main{
	public static void main(String[] args){
		Dog d1 = new Dog("Tommy", "Bull Dog");
		Dog d2 = new Dog("Tyson", "German Shephard");
		System.out.println("Dog 1 : ");
		d1.display();
		System.out.println("Modifying Name of dog 1 to Rymond : ");
		d1.setName("Rymond");
		d1.display();
		System.out.println("Dog 2 : ");
		d2.display();
	}
}`
            }
        },
        {
            "id": 75,
            "description": "Write a Java program to create a class called 'Rectangle' with width and height attributes. Calculate the area and perimeter of the rectangle.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area and perimeter of a rectangle using class attributes.",
                "code": `class Rectangle{
	int width, height;
	Rectangle(int w, int h){
		width = w;
		height = h;
	}
	int area(){
		return (width * height);
	}
	int perimeter(){
		return (2*(width + height));
	}
}
class Main{
	public static void main(String[] args){
		Rectangle obj = new Rectangle(5, 15);
		System.out.println("Area : " + obj.area());
		System.out.println("Perimeter : " + obj.perimeter());
	}
}`
            }
        },
        {
            "id": 76,
            "description": "Write a Java program to create a class called 'Circle' with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates calculating the area and circumference of a circle.",
                "code": `class Circle{
	double radius;

	double area(){
		return (Math.PI * radius * radius);
	}
	double circumference(){
		return (2 * Math.PI * radius);
	}
}
class Main{
	public static void main(String[] args){
		Circle obj = new Circle();
		obj.radius = 5.0;
		System.out.println("Area : " + obj.area());
		System.out.println("Circumference : " + obj.circumference());
	}
}`
            }
        },
        {
            "id": 77,
            "description": "Write a Java program to create a class called 'Book' with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates managing a collection of books using a class.",
                "code": `class Book{
	String title, author, isbn;
	static java.util.List<Book> books = new java.util.ArrayList<>();
	Book(String t, String auth, String code){
		title = t;
		author = auth;
		isbn = code;
	}
	static boolean addBook(Book b){
		try{
			return books.add(b);
		}
		catch(Throwable ex){
			return false;
		}
	}
	static boolean removeBook(Book b){
		try{
			return books.remove(b);
		}
		catch(Throwable ex){
			return false;
		}
	}
	static void displayBooks(){
		if(books.isEmpty()){
			System.out.println("No Books in Collection");
			return;
		}
		for(Book b : books){
			System.out.println("Book No : " + (books.indexOf(b)+1));
			System.out.println("Title : " + b.title);
			System.out.println("Author : " + b.author);
			System.out.println("ISBN : " + b.isbn + "\n");
		}
	}
}
class Main{
	public static void main(String[] args){
		Book b1 = new Book("To Kill a Mockingbird", "Harper Lee", "9782");
        	Book b2 = new Book("1984", "George Orwell", "9780");
        	Book b3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9783");
		Book.addBook(b1);
		Book.addBook(b2);
		Book.addBook(b3);
		Book.displayBooks();
		System.out.println((Book.removeBook(b2)) ? "Book 2 Removed" : "Not able to remove Book 2");
		Book.displayBooks();
	}
}`
            }
        },
        {
            "id": 78,
            "description": "Write a Java program to create a class called 'Employee' with a name, job title, and salary attributes, and methods to calculate and update salary.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates and updates the salary of an employee.",
                "code": `class Employee{
	String name, jobtitle;
	double salary;
	
	void setName(String nm){
		name = nm;
	}
	void setJobTitle(String jt){
		jobtitle = jt;
	}
	void setSalary(double sal){
		salary = sal;
	}
	
	double calcSalary(double bonus, double deductions){
		return (salary+bonus-deductions);
	}
	double updateSalary(double addition){
		salary += addition;
		return salary;
	}
	void display(){
		System.out.println("Employee Detail : ");
		System.out.println("Name : " + name);
		System.out.println("Job Title : " + jobtitle);
		System.out.println("Base Salary : " + salary);
	}	
}
class Main{
	public static void main(String[] args){
		Employee emp = new Employee();
		emp.setName("Abhishek");
		emp.setJobTitle("Manager");
		emp.setSalary(40000);
		emp.display();
		System.out.println("Salary After Bonus and Deductions : " + emp.calcSalary(4852.23, 852.6));

		System.out.println("Updating Salary by 10000 : ");
		System.out.println("New Base Salary : " + emp.updateSalary(10000));

	}
}`
            }
        },
        {
            "id": 79,
            "description": "Write a Java program to create a class called 'Bank' with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called 'Account' to maintain account details of a particular customer.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates a banking system with multiple accounts.",
                "code": `class Account{
	private String accnumber, accholder, acctype;
	private double balance;
	Account(String num, String name, String type, double bal){
		accnumber = num;
		accholder = name;
		acctype = type;
		balance = bal;
	}
	String getAccountNumber(){
		return accnumber;
	}
	String getHolder(){
		return accholder;
	}
	String getAccountType(){
		return acctype;
	}
	double getBalance(){
		return balance;
	}
	void setBalance(double amt){
		balance = amt;
	}
}

class Bank{
	java.util.List<Account> accounts;
	Bank(){
		accounts = new java.util.ArrayList<>();
	}
	
	boolean addAccount(String num, String name, String acctype, double balance){
		Account obj = new Account(num, name, acctype, balance);
		try{
			return accounts.add(obj);
		}
		catch(Throwable th){
			return false;
		}
	}

	boolean removeAccount(String num){
		try{
			return accounts.removeIf(account -> account.getAccountNumber() == num);
		}
		catch(Throwable th){
			return false;
		}
	}
	
	boolean deposit(double amt, String num){
		for(int i = 0; i < accounts.size(); i++){
			if(accounts.get(i).getAccountNumber() == num){
				accounts.get(i).setBalance(accounts.get(i).getBalance() + amt);
				System.out.println(amt + "Rs Depoited Successfully in " + accounts.get(i).getHolder()+"'s Account\n");
				return true;
			}
		}
		System.out.println("Invalid Account Number");
		return false;
	}
	boolean withdraw(double amt, String num){
		for(int i = 0; i < accounts.size(); i++){
			if(accounts.get(i).getAccountNumber() == num){
				if((accounts.get(i).getBalance()-amt) < 0){
					System.out.println("Insufficient funds");
					return false;
				}
				accounts.get(i).setBalance(accounts.get(i).getBalance() - amt);
				System.out.println(amt + "Rs Withdrawal Successful from " + accounts.get(i).getHolder()+"'s Account\n");
				return true;
			}
		}
		System.out.println("Invalid Account Number");
		return false;
	}

	void display(){
		for(Account acc : accounts){
			System.out.println("Name : " + acc.getHolder());
			System.out.println("Account Type : " + acc.getAccountType());
			System.out.println("Balance : " + acc.getBalance());
			System.out.println();
		}
	}
}

class Main{
	public static void main(String[] args){
		Bank acc = new Bank();
		System.out.println((acc.addAccount("24062004", "Abhishek Dhawan", "Savings", 10000)) ? "Account Added Successfully" : "Failed to Add Account");
		System.out.println((acc.addAccount("28052004", "Asha", "Savings", 5035)) ? "Account Added Successfully" : "Failed to Add Account");
		System.out.println((acc.addAccount("15082001", "Pawan Kumar", "Savings", 100)) ? "Account Added Successfully" : "Failed to Add Account");
		acc.display();
		acc.deposit(7000, "15082001");
		acc.withdraw(1000, "28052004");
		acc.display();
				
	}
}`
            }
        },
        {
            "id": 80,
            "description": "Write a Java program to create class called 'TrafficLight' with attributes for color and duration, and methods to change the color and check for red or green.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program simulates a traffic light system with methods to check color and duration.",
                "code": `class TrafficLight{
	String color;
	int duration;
	TrafficLight(int ms){
		color = "Red";
		duration = ms;
	}
	void changeLight(){
		if(color == "Red")
			color = "Green";
		else
			color = "Red";
	}
	String checkLight(){
		return color;
	}
}

class Main{
	public static void main(String[] args){
		TrafficLight obj = new TrafficLight(120000);
		System.out.println("Current Signal : " + obj.checkLight());
		System.out.println("Changing Signal");
		obj.changeLight();
		System.out.println("Current Signal : " + obj.checkLight());

	}
}`
            }
        },
        {
            "id": 81,
            "description": "Write a Java program to create a class called 'Employee' with a name, salary, and hire date attributes, and a method to calculate years of service.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the years of service for an employee.",
                "code": `class Employee{
	String name;
	double salary;
	java.util.Date hiredate;
	Employee(String n, double sal, java.util.Date date){
		name = n;
		salary = sal;
		hiredate = date;
	}
	int yearOfService(java.util.Date resignDate){
		return ((resignDate.getYear()) - (hiredate.getYear()));
	}
	void display(){
		System.out.println("Name : " + name);
		System.out.println("Salary : " + salary);
		System.out.println("Hiring Date : " + hiredate.getDate()+"/"+hiredate.getMonth()+"/"+(hiredate.getYear()));
	}
}
class Main{
	public static void main(String[] args){
		java.util.Date hire = new java.util.Date();
		hire.setDate(1);
		hire.setMonth(6);
		hire.setYear(2011);
		Employee emp = new Employee("Abhishek", 20000, hire);
		emp.display();
		java.util.Date resign = new java.util.Date();
		resign.setYear(new java.util.Date().getYear() + 1900);
		System.out.println("Year of Service : " + emp.yearOfService(resign) + " Years");
	}
}`
            }
        },
        {
            "id": 82,
            "description": "Write a Java program to create a class called 'Student' with a name, grade, and courses attributes, and methods to add and remove courses.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages courses for a student.",
                "code": `class Student{
	String name, grade;
	java.util.List<String> courses;
	Student(String n, String gr){
		name = n;
		grade = gr;
		courses = new java.util.ArrayList<>();
	}
	boolean addCourse(String course){
		if(courses.contains(course)){
			System.out.println("Course Already Exist");
			return false;
		}
		else{
			System.out.println(course + " Added Successfull");
			return courses.add(course);
		}
	}
	boolean removeCourse(String course){
		boolean isremoved = courses.remove(course);
		System.out.println(isremoved ? course + " Removed Successful" : "Course Not Opted");
		return isremoved;
	}
	void display(){
		System.out.println("Name : " + name);
		System.out.println("Grade : " + grade);
		System.out.print("Courses : ");
		System.out.println(courses.isEmpty() ? "No Courses Choosen" : "");
		for(int i = 0; i < courses.size(); i++){
			System.out.print(i+1 + ") " + courses.get(i)+"\t");
		}
		System.out.println();
	}
}

class Main{
	public static void main(String[] args){
		Student st = new Student("Abhishek", "10th");
		st.display();
		st.addCourse("English");
		st.addCourse("Hindi");
		st.addCourse("Music");
		st.addCourse("Drawing");
		st.display();
		st.removeCourse("Hindi");
		st.display();
	}
}`
            }
        },
        {
            "id": 83,
            "description": "Write a Java program to create a class called 'Library' with a collection of books and methods to add and remove books.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a library collection using a class.",
                "code": `class Library{
	java.util.List<String> books;
	Library(){
		books = new java.util.ArrayList<>();
	}
	boolean addBook(String b){
		if(books.contains(b)){
			System.out.println(b+" Already Present in collection");
			return false;
		}
		else{
			if(books.add(b)){
				System.out.println(b +" Added to Library");
				return true;
			}
			else{
				System.out.println(" Failed to Add " + b+ " in Library");
				return false;
			}
		}
	}
	boolean removeBook(String b){
		if(books.remove(b)){
			System.out.println(b + " Removed from Library");
			return true;
		}
		else{
			System.out.println(b + " Not Available in Library");
			return false;
		}
	}
	void displayBooks(){
		if(books.isEmpty()){
			System.out.println("No Books in Collection");
			return;
		}
		System.out.println("\nLibrary Books : ");

		for(int i = 0; i < books.size(); i++){
			System.out.println("Book " + i + ") " + books.get(i));
		}
	}
}

class Main{
	public static void main(String[] args){
		Library lb = new Library();
		lb.addBook("To Kill a Mockingbird");
		lb.addBook("1984");
		lb.addBook("The Great Gatsby");
		lb.displayBooks();
		lb.removeBook("1984");
		lb.removeBook("Hello");
		lb.displayBooks();
	}
}`
            }
        },
        {
            "id": 84,
            "description": "Write a Java program to create a class called 'Airplane' with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program checks flight status and delay using an Airplane class.",
                "code": `class Airplane {
    private String flightNumber;
    private String destination;
    private java.util.Date departureTime;
    private boolean isDelayed;

    Airplane(String flightNumber, String destination, String departureTime) {
        this.flightNumber = flightNumber;
        this.destination = destination;
        this.departureTime = new java.util.Date(new java.util.Date().parse(departureTime));
        this.isDelayed = false;
    }

    void delayFlight(int minutes) {
        if (minutes > 0) {
	    departureTime.setTime(departureTime.getTime()+(minutes*60*1000));         
            this.isDelayed = true;
            System.out.println("Flight delayed by " + minutes + " minutes. New departure time: " + departureTime);
        } else {
            System.out.println("Invalid delay time.");
        }
    }
	String checkFlightStatus(){
		return (isDelayed ? "Delayed" : "On Time");
	}	

    void display(){
        System.out.println("Airplane{Flight Number='" + flightNumber + "', Destination='" + destination + "', Departure Time=" + departureTime + ", Status=" + checkFlightStatus() + "}");
    }
}

class Main {
    public static void main(String[] args) {
        Airplane flight1 = new Airplane("AA123", "New York", "09/11/2024 14:30:30");

        flight1.display();

        System.out.println("Flight Status: " + flight1.checkFlightStatus());

        flight1.delayFlight(45);

        flight1.display();

        System.out.println("Updated Flight Status: " + flight1.checkFlightStatus());
    }
}
`
            }
        },
        {
            "id": 85,
            "description": "Write a Java program to create a class called 'Inventory' with a collection of products and methods to add and remove products, and to check for low inventory.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages an inventory system using a class.",
                "code": `class Products{
	String productname;
	int quantity;
	Products(String name, int quant){
		productname = name;
		quantity = quant;
	}
}

class Inventory{
	java.util.List<Products> products;
	Inventory(){
		products = new java.util.ArrayList<>();
	}
	
	boolean addProducts(String product, int quantity){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				products.get(i).quantity += quantity;
				return true;
			}
		}
		Products obj = new Products(product, quantity);
		return products.add(obj);
	}

	boolean removeProducts(String product, int quantity){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				if((products.get(i).quantity-quantity) >= 0){
					products.get(i).quantity -= quantity;
					return true;
				}
				return false;
			}
		}
		return false;
	}

	void checkInventory(String product){
		for(int i = 0; i < products.size(); i++){
			if(products.get(i).productname == product){
				if(products.get(i).quantity == 0){
					System.out.println(product + " is out of stock");
				}
				else if(products.get(i).quantity <= 100){
					System.out.println(product + " is soon out of stock");
				}
				else{
					System.out.println(product + " is full of stock");
				}
			}
		}
	}
	void displayProducts(){
		if(products.isEmpty()){
			System.out.println("No Products in Collection");
			return;
		}
		for(int i = 0; i < products.size(); i++){
			System.out.println("Product No : " + (i+1));
			System.out.println("Product Name : " + products.get(i).productname);
			System.out.println("Quantity : " + products.get(i).quantity + "\n");
		}
	}
}
class Main{
	public static void main(String[] args){
		Inventory stationary = new Inventory();
		stationary.displayProducts();
		stationary.addProducts("Pen", 10); 
		stationary.addProducts("Pencil", 0);
		stationary.addProducts("Scale", 500);
		stationary.addProducts("Eraser", 100);
		stationary.displayProducts();
		stationary.addProducts("Eraser", 300);
		stationary.removeProducts("Scale", 450);
		stationary.displayProducts();
		stationary.checkInventory("Scale");
		stationary.checkInventory("Pencil");
	}
}`
            }
        },
        {
            "id": 86,
            "description": "Write a Java program to create a class called 'School' with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a school system with students, teachers, and classes.",
                "code": `import java.util.ArrayList;
import java.util.List;

class School {
    private List<String> students;
    private List<String> teachers;
    private List<String> classes;

    public School() {
        students = new ArrayList<>();
        teachers = new ArrayList<>();
        classes = new ArrayList<>();
    }

    public void addStudent(String studentName) {
        students.add(studentName);
        System.out.println("Student " + studentName + " has been added.");
    }

    public void removeStudent(String studentName) {
        if (students.remove(studentName)) {
            System.out.println("Student " + studentName + " has been removed.");
        } else {
            System.out.println("Student " + studentName + " not found.");
        }
    }

    public void addTeacher(String teacherName) {
        teachers.add(teacherName);
        System.out.println("Teacher " + teacherName + " has been added.");
    }

    public void removeTeacher(String teacherName) {
        if (teachers.remove(teacherName)) {
            System.out.println("Teacher " + teacherName + " has been removed.");
        } else {
            System.out.println("Teacher " + teacherName + " not found.");
        }
    }

    public void createClass(String className) {
        classes.add(className);
        System.out.println("Class " + className + " has been created.");
    }

    public void displayDetails() {
	System.out.println();
        System.out.println("Students: " + students);
        System.out.println("Teachers: " + teachers);
        System.out.println("Classes: " + classes);
	System.out.println();
    }
}
class Main{
	public static void main(String[] args) {
        	School mySchool = new School();
        	mySchool.addStudent("Abhishek");
        	mySchool.addStudent("Madhu");
        	mySchool.addTeacher("Mr. Rahul");
        	mySchool.addTeacher("Ms. Sikha");
        	mySchool.createClass("BCA - 1");
        	mySchool.createClass("BCOM - 2");

        	mySchool.displayDetails();

        	mySchool.removeStudent("Madhu");
        	mySchool.removeTeacher("Ms. Sikha");
        	mySchool.displayDetails();
    }
}
`
            }
        },
        {
            "id": 87,
            "description": "Write a Java program to create a class called 'MusicLibrary' with a collection of songs and methods to add and remove songs, and to play a random song.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages a music library and plays a random song.",
                "code": `class MusicLibrary{
	java.util.ArrayList<String> songs;
	MusicLibrary(){
		songs = new java.util.ArrayList<>();
	}
	void addSong(String title){
		if(songs.add(title)){
			System.out.println(title + " Song Added To Music Library");
		}
		else{
			System.out.println(title + " Song Failed to Add To Music Library");
		}
	}
	void removeSong(String title){
		if(songs.remove(title)){
			System.out.println(title + " Song Removed From Music Library");
		}
		else{
			System.out.println(title + " Song not Available in Music Library");
		}
	}
	void playRandom(){
		System.out.println("\nPlaying Random Song");
		System.out.println("Playing Song : " + songs.get(new java.util.Random().nextInt(songs.size()-1)));
	}
}
class Main{
	public static void main(String[] args){
		MusicLibrary wynk = new MusicLibrary();
		wynk.addSong("Dildariyaan");
		wynk.addSong("Tum Hi Ho");
		wynk.addSong("Pee Loon");
		wynk.addSong("Yaariyan");
		wynk.addSong("Old Money");
		wynk.addSong("College Days");
		wynk.addSong("Jatt Shikari");
		wynk.playRandom();
		wynk.playRandom();
		wynk.removeSong("Old Money");
		wynk.removeSong("ABC");

	}
}`
            }
        },
        {
            "id": 88,
            "description": "Write a Java program to create a class called 'Shape' with abstract methods for calculating area and perimeter, and subclasses for 'Rectangle', 'Circle', and 'Triangle'.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates abstract classes and methods for shape calculation.",
                "code": `abstract class Shape{
	abstract double area();
	abstract double perimeter();
}
class Rectangle extends Shape{
	private double length, breadth;
	Rectangle(double l, double b){
		length = l;
		breadth = b;
	}
	double area(){
		return (length * breadth);
	}
	double perimeter(){
		return (2*(length + breadth));
	}
}
class Circle extends Shape{
	private double radius;
	Circle(double r){
		radius = r;
	}
	double area(){
		return (Math.PI*radius*radius);
	}
	double perimeter(){
		return (2*Math.PI*radius);
	}
}
class Triangle extends Shape{
	private double side1, side2, side3;
	Triangle(double s1, double s2, double s3){
		side1 = s1;
		side2 = s2;
		side3 = s3;
	}
	double area(){
		double s = perimeter()/2;
		return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
	}
	double perimeter(){
		return (side1+side2+side3);
	}
}

class Main{
	public static void main(String[] args){
		Shape obj;
		obj = new Rectangle(10, 5);
		System.out.println("Area of Rectangle : " + obj.area());
		System.out.println("Perimeter of Rectangle : " + obj.perimeter());
		obj = new Circle(5);
		System.out.println("Area of Circle : " + obj.area());
		System.out.println("Perimeter of Circle : " + obj.perimeter());
		obj = new Triangle(5, 2, 6);
		System.out.println("Area of Triangle : " + obj.area());
		System.out.println("Perimeter of Triangle : " + obj.perimeter());

	}
}`
            }
        },
        {
            "id": 89,
            "description": "Write a Java program to create a class called 'Movie' with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages movie details and allows adding and retrieving reviews.",
                "code": `class Movie{
	private String title, director;
	private java.util.List<String> actors, reviews;
	Movie(String name, String dir){
		title = name;
		director = dir;
		actors = new java.util.ArrayList<>();
		reviews = new java.util.ArrayList<>();
	}
	void addActor(String actor){
		if(actors.add(actor)){
			System.out.println(actor + " Added To Cast Of " + title);
		}
		else{
			System.out.println(actor + " Failed to Add");
		}
	}
	void addReview(String review){
		if(reviews.add(review)){
			System.out.println("Your Review Added for " + title);
		}
		else{
			System.out.println("Failed to Add Review");
		}
	}
	java.util.List getReviews(){
		return reviews;		
	}
	void displayMovie(){
		System.out.println();
		System.out.println("Title : " + title);
		System.out.println("Director : " + director);
		System.out.println("Actors : " + actors);	
	}
}

class Main{
	public static void main(String[] args){
		Movie titanic = new Movie("Titanic", "James Cameron");
		titanic.addActor("Kate Winslet");
		titanic.addActor("Leonardo DiCaprio");
		titanic.addActor("Billy Zane");
		titanic.addActor("Kathy Bates");
		titanic.addReview("How many times I watch this movie.... It's still the masterpiece.");
		titanic.addReview("Titanic masterpiece: an emotional and visual thrill ride");
		titanic.addReview("STANDING OVATION! - (10 stars out of 10)");

		titanic.displayMovie();
		System.out.println("\nDisplaying Reviews\n");
		java.util.List<String> reviews = titanic.getReviews();
		for(String str : reviews){
			System.out.println(str);
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 90,
            "description": "Write a Java program to create a class called 'Restaurant' with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages restaurant menu items and calculates the average rating.",
                "code": `class MenuItem{
	String name;
	double price;
	MenuItem(String i, double p){
		name = i;
		price = p;
	}
}
class Restaurant{
	java.util.List<MenuItem> menu;
	java.util.List<Double> rating;
	Restaurant(){
		menu = new java.util.ArrayList<>();
		rating = new java.util.ArrayList<>();
	}
	void addMenu(String item, double price){
		if(price >= 0){
			if(menu.add(new MenuItem(item, price))){
				System.out.println("Item : "+item+" Price : "+price+" Added to Menu");
			}
		}
		else{
			System.out.println("Price can not be negative");
		}
	}
	void removeMenu(String item){
		for(int i = 0; i < menu.size(); i++){
			if(menu.get(i).name == item){
				if(menu.remove(i) != null){
					System.out.println(item + " Removed Successfully");
					return;
				}
			}
		}
		System.out.println(item + " Not Found");	
	}
	void addRating(double val){
		if(val < 0 || val > 10){
			System.out.println("Rating Should be between 0 to 10. You Entered : " + val);
			return;
		}
		if(rating.add(val)){
			System.out.println(val + " Rated Successfull");
		}
	}
	double averageRating(){
		double sum = 0;
		int i = 0;
		for(i = 0; i < rating.size(); i++){
			sum += rating.get(i);
		}
		return (sum/i);
	}
}

class Main{
	public static void main(String[] args){
		Restaurant chillis = new Restaurant();
		chillis.addMenu("Noodles - Full", 100);
		chillis.addMenu("Noodles - Half", 70);
		chillis.addMenu("Burger", 50);
		chillis.addMenu("White Sauce Pasta", 120);	
		chillis.addMenu("Masala Dosa", 70);
		chillis.removeMenu("White Sauce Pasta");
		chillis.removeMenu("abc");
		chillis.addRating(18);
		chillis.addRating(5.5);
		chillis.addRating(7);
		chillis.addRating(8.3);
		System.out.println(chillis.averageRating());
	}
}`
            }
        },
        {
            "id": 91,
            "description": "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program simulates a booking system that handles flights and hotel reservations.",
                "code": `import java.util.ArrayList;
import java.util.List;

class ReservationSystem {
    private List<String> flights;
    private List<String> hotels;
    private List<String> flightBookings;
    private List<String> hotelBookings;

    public ReservationSystem() {
        flights = new ArrayList<>();
        hotels = new ArrayList<>();
        flightBookings = new ArrayList<>();
        hotelBookings = new ArrayList<>();
        initializeData();
    }

    private void initializeData() {
        flights.add("Flight 101 - New York to London");
        flights.add("Flight 202 - London to Paris");
        flights.add("Flight 303 - Paris to Tokyo");

        hotels.add("Hotel A - New York");
        hotels.add("Hotel B - London");
        hotels.add("Hotel C - Paris");
    }

    public void searchFlights(String f) {
        for (String flight : flights) {
            if(flight == f){
		System.out.println(flight + " Flight is Avalable");
	    }
        }
    }

    public void searchHotels(String h) {
        for (String hotel : hotels) {
            if(hotel == h){
		System.out.println(hotel + " Hotel is Avalable" );
	    }
        }
    }

    public void bookFlight(String flight) {
        if (flights.contains(flight) && !flightBookings.contains(flight)) {
            flightBookings.add(flight);
            System.out.println("Successfully booked: " + flight);
        } else {
            System.out.println("Flight not available or already booked.");
        }
    }

    public void bookHotel(String hotel) {
        if (hotels.contains(hotel) && !hotelBookings.contains(hotel)) {
            hotelBookings.add(hotel);
            System.out.println("Successfully booked: " + hotel);
        } else {
            System.out.println("Hotel not available or already booked.");
        }
    }

    public void cancelFlight(String flight) {
        if (flightBookings.contains(flight)) {
            flightBookings.remove(flight);
            System.out.println("Successfully canceled: " + flight);
        } else {
            System.out.println("No such flight booking found.");
        }
    }

    public void cancelHotel(String hotel) {
        if (hotelBookings.contains(hotel)) {
            hotelBookings.remove(hotel);
            System.out.println("Successfully canceled: " + hotel);
        } else {
            System.out.println("No such hotel booking found.");
        }
    }

    public static void main(String[] args) {
        ReservationSystem reservationSystem = new ReservationSystem();
        
        reservationSystem.searchFlights("Flight 101 - New York to London");
        reservationSystem.searchHotels("Hotel A - New York");

        reservationSystem.bookFlight("Flight 101 - New York to London");
        reservationSystem.bookHotel("Hotel A - New York");

        reservationSystem.bookFlight("Flight 101 - New York to London");
        reservationSystem.bookHotel("Hotel A - New York");

        reservationSystem.cancelFlight("Flight 101 - New York to London");
        reservationSystem.cancelHotel("Hotel A - New York");

        reservationSystem.cancelFlight("Flight 101 - New York to London");
        reservationSystem.cancelHotel("Hotel A - New York");
    }
}
`
            }
        },
        {
            "id": 92,
            "description": "Create a class showing an example of default constructor.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a default constructor in a class.",
                "code": `class My{
	My(){
		System.out.println("This is Default Constructor");
	}
}

class Main{
	public static void main(String[] args){
		new My();
	}
}`
            }
        },
        {
            "id": 93,
            "description": "Create a class showing an example of parameterized constructor.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a parameterized constructor in a class.",
                "code": `class My{
	My(int x){
		System.out.println("This is Parametrized Constructor. x = " + x);
	}
}

class Main{
	public static void main(String[] args){
		new My(500);
	}
}`
            }
        },
        {
            "id": 94,
            "description": "Create a class showing an example of copy constructor.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a copy constructor to copy the attributes of another object.",
                "code": `class My{
	int x;
	My(int val){
		x = val;
		System.out.println("Parametrized Constructor");		
	}
	My(My obj){
		x = obj.x;
		System.out.println("Copy Constructor");		
	}
	void displayX(){
		System.out.println("x = " + x);
	}
}

class Main{
	public static void main(String[] args){
		My obj, cpobj;
		obj = new My(500);
		obj.displayX();
		cpobj = new My(obj);
		cpobj.displayX();
	}
}`
            }
        },
        {
            "id": 95,
            "description": "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program automatically generates roll numbers for students while adding their details.",
                "code": `class Student{
	private static int totalStudents;
	private int rollno;
	private String studingclass, name;
	Student(String n, String cl){
		name = n;
		studingclass = cl;
		totalStudents++;
		rollno = 4000+totalStudents;
	}
	void displayDetails(){
		System.out.println("Roll No : " + rollno);
		System.out.println("Name : " + name);
		System.out.println("Class : " + studingclass);
	}
}
class Main{
	public static void main(String[] args){
		Student obj[] = new Student[10];
		obj[0] = new Student("Abhishek", "BCA - 3");
		obj[1] = new Student("Asha", "BCA - 3");
		obj[2] = new Student("Neha", "BBA - 3");
		obj[3] = new Student("Gurpreet", "BBA - 2");
		obj[4] = new Student("Amandeep", "BCOM - 1");
		obj[5] = new Student("Gian", "BCA - 1");
		obj[6] = new Student("Rohit", "BCA - 3");
		obj[7] = new Student("Mohit", "BCOM - 2");
		obj[8] = new Student("Nisha", "BBA - 2");
		obj[9] = new Student("Riya", "BA - 2");
		for(Student st : obj){
			st.displayDetails();
			System.out.println();
		}
	}
}`
            }
        },
        {
            "id": 96,
            "description": "Create a class showing the area of circle and rectangle by method overloading.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates method overloading by calculating the area of a circle and rectangle.",
                "code": `class Area{
	double area(double radius){
		return (Math.PI*radius*radius);
	}
	double area(double length, double breadth){
		return length * breadth;
	}
}
class Main{
	public static void main(String[] args){
		Area obj = new Area();
		System.out.println("Area of Circle with radius = 5 : " +obj.area(5));
		System.out.println("Area of Rectangle with length = 5 and breadth = 9 : " +obj.area(5, 9));

	}
}`
            }
        },
        {
            "id": 97,
            "description": "Create a class, entering the command line arguments from the user and show all the arguments as output.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program takes user input via command-line arguments and prints them.",
                "code": `class Main{
	public static void main(String[] args){
		if(args.length == 0){
			System.out.println("Command Line Argument Not Entered");
		}
		else{	
			System.out.print("Entered Arguments : ");
			for(String arg : args){
				System.out.print(arg + "\t");
			}
		}
	}
}`
            }
        },
        {
            "id": 98,
            "description": "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the encapsulation principle by using private variables and public getter/setter methods.",
                "code": `class Person{
	private String name, country;
	private int age;
	public void setName(String n){
		name = n;
	}
	public void setCountry(String cntry){
		country = cntry;
	}
	public void setAge(int a){
		age = a;
	}
	public String getName(){
		return name;
	}
	public String getCountry(){
		return country;
	}
	public int getAge(){
		return age;
	}
}

class Main{
	public static void main(String[] args){
		Person p1 = new Person();
		p1.setName("Abhishek");
		p1.setAge(20);
		p1.setCountry("India");
		System.out.println("Name : " + p1.getName());
		System.out.println("Country : " + p1.getCountry());
		System.out.println("Age : " + p1.getAge());

	}
}`
            }
        },
        {
            "id": 99,
            "description": "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program manages bank account details using getter and setter methods.",
                "code": `class BankAccount{
	private long accnumber;
	private double balance;
	
	public void setAccountNumber(long accnum){
		accnumber = accnum;
	}
	public void setBalance(double bal){
		balance = bal;
	}
	public long getAccountNumber(){
		return accnumber;
	}
	public double getBalance(){
		return balance;
	}
}

class Main{
	public static void main(String[] args){
		BankAccount b1 = new BankAccount();
		b1.setAccountNumber(6258203210L);
		b1.setBalance(18501.3872);
		System.out.println("Account Number : " + b1.getAccountNumber());
		System.out.println("Balance : " + b1.getBalance() + " Rs");

	}
}`
            }
        },
        {
            "id": 100,
            "description": "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
            "difficulty": "easy",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of getter and setter methods for rectangle dimensions.",
                "code": `class Rectangle{
	private double length, breadth;
	
	public void setLength(double l){
		length = l;
	}
	public void setBreadth(double b){
		breadth = b;
	}
	public double getLength(){
		return length;
	}
	public double getBreadth(){
		return breadth;
	}
}

class Main{
	public static void main(String[] args){
		Rectangle b1 = new Rectangle();
		b1.setLength(10.3);
		b1.setBreadth(18.38);
		System.out.println("Length : " + b1.getLength());
		System.out.println("Breadth : " + b1.getBreadth());

	}
}`
            }
        },
        {
            "id": 101,
            "description": "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates encapsulation by providing access control using getter and setter methods.",
                "code": `class Employee{
	private String employee_id, employee_name;
	private double employee_salary;

	public void setEmpId(String id){
		employee_id = id;
	}
	public void setEmpName(String name){
		employee_name = name;
	}
	public String getEmpId(){
		return employee_id;
	}
	public String getEmpName(){
		return employee_name;
	}
	public void setSalary(double salary){
		employee_salary = salary;
	}
	public String getSalary(){
		return String.format("%.2f Rs", employee_salary);
	}
}

class Main{
	public static void main(String[] args){
		Employee emp = new Employee();
		emp.setEmpId("1001");
		emp.setEmpName("Abhishek");
		emp.setSalary(40500.872565);
		System.out.println("Employee Id : " + emp.getEmpId());
		System.out.println("Employee Name : " + emp.getEmpName());
		System.out.println("Employee Salary : " + emp.getSalary());
	}
}`
            }
        },
        {
            "id": 102,
            "description": "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program calculates the area and perimeter of a circle based on its radius.",
                "code": `class Circle{
	private double radius;
	public double getRadius(){
		return radius;
	}
	public void setRadius(double r){
		radius = r;
	}
	double calculateArea(){
		return (Math.PI * radius * radius);
	}
	double calculatePerimeter(){
		return (2 * Math.PI * radius);
	}
}
class Main{
	public static void main(String[] args){
		Circle obj = new Circle();
		obj.setRadius(5);
		System.out.println("Radius of Circle : " + obj.getRadius());
		System.out.println("Area : " + obj.calculateArea());
		System.out.println("Circumference : " + obj.calculatePerimeter());
	}
}`
            }
        },
        {
            "id": 103,
            "description": "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
            "difficulty": "medium",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates controlled access to class attributes with the use of getter and setter methods.",
                "code": `class Car{
	private String company, model, year;
	private double mileage = 15;
	public void setCompany(String cmpny){
		company = cmpny;
	}
	public void setModel(String m){
		model = m;
	}
	public void setYear(String yy){
		year = yy;
	}
	public String getCompany(){
		return company;
	}
	public String getModel(){
		return model;
	}
	public String getYear(){
		return year;
	}
	public double getMileage(){
		return mileage;
	}
}
class Main{
	public static void main(String[] args){
		Car bmw = new Car();
		bmw.setCompany("BMW");
		bmw.setModel("X1");
		bmw.setYear("2022");
		System.out.println("Car Company : " + bmw.getCompany());
		System.out.println("Car Model : " + bmw.getModel());
		System.out.println("Car Year : " + bmw.getYear());
		System.out.println("Car Mileage : " + bmw.getMileage());	
	}
}`
            }
        },
        {
            "id": 104,
            "description": "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
            "difficulty": "hard",
            "topic": 14,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program handles student data with validation, using getter, setter, and additional methods.",
                "code": `import java.util.ArrayList;
import java.util.List;

class Student {
    private int student_id;
    private String student_name;
    private List<Double> grades;

    public Student(int id, String name) {
        student_id = id;
        student_name = name;
        grades = new ArrayList<>();
    }

    public int getStudentId() {
        return student_id;
    }

    public void setStudentId(int student_id) {
        this.student_id = student_id;
    }

    public String getStudentName() {
        return student_name;
    }

    public void setStudentName(String student_name) {
        this.student_name = student_name;
    }

    public void addGrade(double grade) {
        if (grade >= 0.0 && grade <= 100.0) {
            grades.add(grade);
            System.out.println("Grade added: " + grade);
        } else {
            System.out.println("Invalid grade. Please enter a grade between 0 and 100.");
        }
    }
    public List<Double> getGrades(){
	return grades;	
    }
}
class Main{
	public static void main(String[] args) {
        	Student student = new Student(1, "Alice");

		System.out.println("Student ID: " + student.getStudentId());
        	System.out.println("Student Name: " + student.getStudentName());
        	System.out.println("Grades: " + student.getGrades());

        	student.addGrade(85.5);
        	student.addGrade(92.0);
        	student.addGrade(-10.0); 
        	student.addGrade(101.0); 
        	student.addGrade(78.0);

        	System.out.println("\nUpdated Student Details:");
        	System.out.println("Student ID: " + student.getStudentId());
        	System.out.println("Student Name: " + student.getStudentName());
        	System.out.println("Grades: " + student.getGrades());
    }
}`
            }
        },
        // Exception Handaling
        {
            "id": 105,
            "description": "Write a Java program that throws an exception and catches it using a try-catch block.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates exception handling using a try-catch block.",
                "code": `class ReadChar{
	void takeChar() throws IOException{
		System.out.print("Enter Character : ");
		System.out.println("Entered Character : " + ((char)(System.in.read())));
	}
}
class Main{
	public static void main(String[] args){
		ReadChar rc = new ReadChar();
		try{
			rc.takeChar();
		}
		catch(Throwable th){
			System.out.println("Exception Occured : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 106,
            "description": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if the input integer is odd.",
                "code": `class NumberIsOddException extends Throwable{
	public java.lang.String getMessage(){
		return "Number is Odd";
	}
}
class Main{
	void isOdd(int num) throws NumberIsOddException{
		if(num % 2 != 0){
			throw new NumberIsOddException();
		}
	}
	public static void main(String[] args){
		try{
			(new Main()).isOdd(23);
		}
		catch(NumberIsOddException e){
			System.out.println("Exception : " + e.getMessage());	
		}
	}
}`
            }
        },
        {
            "id": 107,
            "description": "Write a Java program to create a method that reads a file and throws an exception if the file is not found.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program handles file reading and throws an exception if the file does not exist.",
                "code": `class Main{
	public static String readFile(String filepath) throws  java.io.FileNotFoundException, java.io.IOException{
		java.io.InputStreamReader isr = new java.io.FileReader(filepath);
		String str = "";
		char ch = 'c';
		while((ch = (char)isr.read()) != -1){
			str += ch;
		}
		return str;
	}
	public static void main(String args[]){
		try{
			readFile("Hello.txt");
		}
		catch(java.io.FileNotFoundException ex){
			System.out.println("File Not Found : " + ex.getMessage());
		}
		catch(Throwable th){
			System.out.println("Unexpected Erro : " + th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 108,
            "description": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if a positive number is found in the file.",
                "code": `class PositiveNumberException extends Throwable{
	public String getMessage(){
		return "File Contain Positive Numbers";
	}
}
class Main{
	static void readFile() throws java.io.FileNotFoundException, PositiveNumberException{
		java.util.Scanner sc = new java.util.Scanner(new java.io.File("my.txt"));
		while(sc.hasNextInt()){
			if(sc.nextInt() < 0){
				throw (new PositiveNumberException());
			}
		}
	}
	public static void main(String[] args){
		try{
			readFile();
		}
		catch(PositiveNumberException e){
			System.out.println(e.getMessage());
		}
		catch(Throwable e){
			System.out.println(e.getMessage());
		}
	}
}
`
            }
        },
        {
            "id": 109,
            "description": "Write a Java program that reads a file and throws an exception if the file is empty.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program reads a file and checks if it is empty, throwing an exception if so.",
                "code": `class EmptyFileException extends Throwable{
	public String getMessage(){
		return "File Is Empty Exception";
	}
}

class Main{
	static void readFile() throws java.io.FileNotFoundException, EmptyFileException, java.io.IOException{
		java.io.InputStreamReader isr = new java.io.FileReader("my.txt");
		if(isr.read() == -1){
			throw new EmptyFileException();
		}	
	}
	public static void main(String[] args){
		try{
			readFile();
		}
		catch(EmptyFileException e){
			System.out.println(e.getMessage());
		}
		catch(Throwable e){
			System.out.println(e.getMessage());
		}
	}
}
`
            }
        },
        {
            "id": 110,
            "description": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if duplicate integers are found in the input list.",
                "code": `class NumberIsDuplicateException extends Throwable{
	public String getMessage(){
		return "Number Already Entered";
	}
}
class Main{
	static int[] readValues() throws java.io.IOException, NumberIsDuplicateException{
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		int[] arr = new int[10];
		for(int i = 0; i < arr.length; i++){
			arr[i]  =  Integer.parseInt(br.readLine()); 
			if(i > 0){
				java.util.Arrays.sort(arr, 0, i-1);
				if(java.util.Arrays.binarySearch(arr, 0, i-1, arr[i]) >= 0)
					throw (new NumberIsDuplicateException());
			}
		}
		return arr;
	}
	public static void main(String[] args){
		try{
			Main.readValues();
		}
		catch(Throwable th){
			System.out.println(th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 111,
            "description": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program throws an exception if the input string does not contain any vowels.",
                "code": `class DoesNotHaveVowelException extends Throwable{
	public String getMessage(){
		return "String Doesn't contain vowels";
	}
}
class Main{
	static void readValues() throws java.io.IOException, DoesNotHaveVowelException{
		java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
		String str = br.readLine();	
		boolean containvowel = false;
		for(int i = 0; i < str.length(); i++){
			if(str.contains("A") || str.contains("a") || str.contains("E") || str.contains("e") || str.contains("I") || str.contains("i") || str.contains("O") || str.contains("o") ||  str.contains("U") || str.contains("u")){
			containvowel = true;
			}
		}
		if(!containvowel){
			throw (new DoesNotHaveVowelException());
		}
	}
	public static void main(String[] args){
		try{
			Main.readValues();
		}
		catch(Throwable th){
			System.out.println(th.getMessage());
		}
	}
}`
            }
        },
        {
            "id": 112,
            "description": "Write a Java program to connect the Java API to Database, if the connection is not successful then throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program connects to a database and throws an exception if the connection fails.",
                "code": null
            }
        },
        {
            "id": 113,
            "description": "Write a Java program to manage the driver with path, username, and password. If not successful, throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program sets up a database driver and throws an exception if it fails.",
                "code": null
            }
        },
        {
            "id": 114,
            "description": "Write a Java program to throw the SQL Query (insert, delete, update). If not successful, then throw an exception.",
            "difficulty": "hard",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program executes SQL queries and throws an exception if they fail.",
                "code": null
            }
        },
        {
            "id": 115,
            "description": "Write a Java program to show an example of the 'throws' keyword.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of the 'throws' keyword in Java.",
                "code": null
            }
        },
        {
            "id": 116,
            "description": "Write a Java program to show an example of multiple catch blocks.",
            "difficulty": "easy",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates handling multiple exceptions using multiple catch blocks.",
                "code": null
            }
        },
        {
            "id": 117,
            "description": "Write a Java program to show an example of a nested try block.",
            "difficulty": "medium",
            "topic": 5,
            "sample_input": null,
            "sample_output": null,
            "solution": {
                "language": "Java",
                "explanation": "This program demonstrates the use of a nested try-catch block for exception handling.",
                "code": null
            }
        }
    ]

}

