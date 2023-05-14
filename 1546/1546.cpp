#include <iostream>

using namespace std;
int main()
{
    int N;
    int M = 0;
    float Result = 0;
    int arr[1001] = {0};

    cin >> N;
    for(int a=1;a<=N;a++)
    {
        cin >> arr[a];
        if(arr[a] > M)
        {
            M = arr[a];
        }
        Result += arr[a];
    }
    Result = (Result/M*100)/N;
    
    cout << fixed;
    cout.precision(9);
    cout << Result << endl;
    
    return 0;
}