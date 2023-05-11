#include <iostream>

using namespace std;
int main()
{
    int arr[101];

    int N, M, i, j, temp;
    
    cin >> N >> M;
    for(int a=1;a<=N;a++)
    { 
        arr[a] = a;         
    }
    for(int a=0;a<M;a++)
    {
        cin >> i >> j;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (int a=0;a<N;a++)
    {
        cout << arr[a+1] << " ";  
    }
    
    return 0;
}