#include <iostream>

using namespace std;
int main()
{
    int N, v;
    int arr[101];
    int result = 0;

    cin >> N;

    for (int i=0;i<N;i++)
    {
        cin >> arr[i];
    }

    cin >> v;
    
    for (int i=0;i<N;i++)
    {
        if(v == arr[i])
        {
            result++;
        }
    }
    cout << result << endl;

    return 0;
}