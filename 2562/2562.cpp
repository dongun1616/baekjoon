#include <iostream>

using namespace std;
int main()
{
    int arr[11];

    int max = -10;
    int i=0;
    int N;

    for(i=0;i<9;i++)
    {
        cin >> arr[i];
        if(max < arr[i])
        {
            max = arr[i];
            N = i+1;
        }
    }
    cout << max << endl << N;

    
    return 0;
}