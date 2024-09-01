const quesData = {
    "questions": [
        {
            "id": 0,
            "description": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
            "difficulty": "easy",
            "topic": 0,
            "sample_input": null,
            "sample_output": "ABC",
            "solution": {
                "language": "Java",
                "explanation": "Explaining the above code",
                "code": `
import java.util.Scanner;

public class MatrixInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user for the number of rows and columns
        System.out.print("Enter the number of rows: ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of columns: ");
        int cols = scanner.nextInt();

        // Create a matrix with the specified rows and columns
        int[][] matrix = new int[rows][cols];

        // Input matrix elements
        System.out.println("Enter the elements of the matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print("Element [" + i + "][" + j + "]: ");
                matrix[i][j] = scanner.nextInt();
            }
        }

        // Print the matrix in matrix format
        System.out.println("\\nMatrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(matrix[i][j] + "\\t");
            }
            System.out.println();
        }

        scanner.close();
    }
}`
            }
        },
        {
            "id": 1,
            "description": "Program to Add Two Matrices",
            "difficulty": "hard",
            "topic": 0,
            "sample_input": 123,
            "sample_output": "hello world!",
            "solution": {
                "language": "Java",
                "code": "public static void main(String[] args){}",
                "explanation": "Explaining the above code"
            }
        }
    ]
}