#include <iostream>

using namespace std;
int main()
{
    int N, M, i, j, k;
    
    cin >> N >> M;
    int arr[101] = {0};

    for(int a=0;a<M;a++)
    {
        cin >> i >> j >> k;
        for(int a=i;a<=j;a++)
        {
            arr[a] = k;
        }
        
    }
    for (int a=0;a<N;a++)
    {
        cout << arr[a+1] << " ";  
    }
    
    return 0;
}